import constants from "./modules/constants-module";
import dom from "./modules/dom-module";

export const POP = {
	create: (elementTag, elementChildren = [], elementProps = {}) => {
		const children =
			Array.isArray(elementProps) && elementProps.length
				? elementProps
				: elementChildren;
		if (children && Array.isArray(children) && children.length) {
			children.forEach((value, index) => {
				if (!value) {
					children[index] = " ";
				}
			});
		}
		if (typeof elementTag === constants.createPOPElementTagType) {
			return {
				tag: elementTag,
				props:
					!Array.isArray(elementChildren) && Object.keys(elementChildren).length
						? elementChildren
						: elementProps,
				children,
			};
		}
	},
	getState: (accessKey) => {
		if (!accessKey) {
			throw new Error(constants.accessKeyInvalidError);
		}
		if (dom.state[accessKey]) {
			const state = { ...dom.state[accessKey] };
			return state;
		}
		return {};
	},
	use: (popComponent, popComponentChildren = [], popComponentProps = {}) => {
		const componentChildren =
			Array.isArray(popComponentProps) && popComponentProps.length
				? popComponentProps
				: popComponentChildren;
		const componentProps =
			Object.keys(popComponentChildren).length &&
			!Array.isArray(popComponentChildren)
				? popComponentChildren
				: popComponentProps;
		let parent = {};
		let componentState = {};
		const componentStateKey = dom.getComponentStateKey(componentProps.key);
		dom.stateCheckSet.add(componentStateKey);
		if (componentProps.accessKey) {
			dom.stateCheckSet.add(componentProps.accessKey);
		}
		const expandedComponent =
			typeof popComponent === constants.typeofPropsFunctionIdentifier &&
			!dom.state[componentStateKey]
				? popComponent({ props: { ...componentProps } })
				: typeof popComponent === constants.typeofPropsFunctionIdentifier
				? dom.renderStore[componentStateKey].expandedFn
				: popComponent;
		if (!dom.state[componentStateKey]) {
			dom.state[componentStateKey] = {};
			dom.renderStore[componentStateKey] = {};
			dom.renderStore[componentStateKey].expandedFn =
				typeof popComponent === constants.typeofPropsFunctionIdentifier
					? popComponent({ props: { ...componentProps } })
					: popComponent;
			if (expandedComponent.set) {
				parent.set = expandedComponent.set;
				expandedComponent.set({
					props: { ...componentProps },
					state: dom.state[componentStateKey],
				});
			}
			componentState = dom.state[componentStateKey];
			dom.state[componentProps.accessKey] = componentState;
		}
		if (expandedComponent.render) {
			parent.componentStateKey = componentStateKey;
			componentState = dom.state[componentStateKey];
			dom.state[componentProps.accessKey] = componentState;
			delete componentProps.accessKey;
			const rendered = expandedComponent.render({
				props: { ...componentProps },
				state: componentState,
			});
			const children = rendered.children;
			if (!rendered.tag.render) {
				parent = { ...parent, ...rendered };
				if (componentChildren && componentChildren.length) {
					componentChildren.forEach((child) => {
						parent.children.push(child);
					});
				}
			} else {
				parent = POP.use(rendered.tag, componentChildren);
				children.forEach((child) => {
					parent.children.push(child);
				});
				if (componentChildren && componentChildren.length) {
					componentChildren.forEach((child) => {
						parent.children.push(child);
					});
				}
			}
			return parent;
		}
	},
	refresh: () => {
		dom.stateCheckSet.clear();
		const newTree = dom.renderFn();
		newTree.children = dom.filterValidPopObjects(newTree);
		dom.updateElement(dom.root, newTree, dom.prevTree);
		dom.prevTree = newTree;
		dom.cleanState();
	},
	root: (popComponent, rootProps = {}) => {
		const { rootName, accessKey, popRoutes } = rootProps;
		const root = document.createElement(constants.createRootElementTag);
		root.id =
			rootName && typeof rootName === constants.createPOPElementTagType
				? rootName
				: constants.createRootElementDefaultId;
		document.body.appendChild(root);
		dom.root = root;
		const hasRoutes =
			popRoutes && !Array.isArray(popRoutes) && Object.keys(popRoutes).length
				? true
				: false;
		dom.routes = hasRoutes ? popRoutes : null;
		let componentToRender;
		const path = window.location.href.split("#!")[1];
		const defaultPath = hasRoutes ? Object.keys(popRoutes)[0] : null;
		if (!path && hasRoutes) {
			window.location.href += `#!${defaultPath}`;
		}
		if (hasRoutes && path && popRoutes[path]) {
			componentToRender = popRoutes[path];
			dom.currPath = path;
		} else {
			componentToRender = popComponent;
		}
		dom.init();
		const componentStateKey = accessKey
			? accessKey
			: dom.getComponentStateKey();
		const isComponentFunction =
			typeof componentToRender === constants.typeofPropsFunctionIdentifier;
		const expandedComponent =
			isComponentFunction && !dom.state[componentStateKey]
				? componentToRender()
				: componentToRender;
		dom.initializeState(expandedComponent, componentStateKey);
		const componentState = componentStateKey
			? POP.getState(componentStateKey)
			: {};
		dom.prevTree = expandedComponent.render({
			state: componentState,
		});
		dom.prevTree.children = dom.filterValidPopObjects(dom.prevTree);
		dom.renderFn = () =>
			expandedComponent.render({
				state: componentState,
			});
		dom.updateElement(root, dom.prevTree);
		root.addEventListener(constants.refreshDOMDefaultAction, () => {
			POP.refresh();
		});
	},
};

export default POP;
