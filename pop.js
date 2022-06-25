import constants from "./modules/constants-module";
import dom from "./modules/dom-module";

export const POP = {
	create: (elementTag, elementChildren = [], elementProps = {}) => {
		if (typeof elementTag === constants.createPOPElementTagType) {
			return {
				tag: elementTag,
				props:
					!Array.isArray(elementChildren) && Object.keys(elementChildren).length
						? elementChildren
						: elementProps,
				children:
					Array.isArray(elementProps) && elementProps.length
						? elementProps
						: elementChildren,
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
			!Array.isArray(popComponentChildren) &&
			Array.isArray(popComponentProps) &&
			popComponentProps.length
				? popComponentProps
				: popComponentChildren;
		const componentProps =
			!Object.keys(popComponentProps).length &&
			!Array.isArray(popComponentChildren) &&
			Object.keys(popComponentChildren).length
				? popComponentChildren
				: popComponentProps;
		if (popComponent.render) {
			let parent = {};
			let componentState = {};
			if (popComponent.set && componentProps.accessKey) {
				parent.set = popComponent.set;
				parent.accessKey = componentProps.accessKey;
				if (!dom.state[componentProps.accessKey]) {
					dom.state[componentProps.accessKey] = {};
					popComponent.set(dom.state[componentProps.accessKey]);
					componentState = dom.state[componentProps.accessKey];
				} else {
					componentState = dom.state[componentProps.accessKey];
				}
			}
			if (popComponent.set && !componentProps.accessKey) {
				throw new Error(constants.accessKeyMissingError);
			}
			delete componentProps.accessKey;
			const rendered = popComponent.render({
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
		const newTree = dom.renderFn();
		newTree.children = dom.filterValidPopObjects(newTree);
		dom.updateElement(dom.root, newTree, dom.prevTree);
		dom.prevTree = newTree;
	},
	root: (popComponent, rootProps) => {
		const { rootName, accessKey, componentProps } = rootProps;
		const root = document.createElement(constants.createRootElementTag);
		root.id =
			rootName && typeof rootName === constants.createPOPElementTagType
				? rootName
				: constants.createRootElementDefaultId;
		document.body.appendChild(root);
		dom.root = root;
		dom.state = {};
		dom.initializeState(popComponent, accessKey);
		const componentState = accessKey ? POP.getState(accessKey) : {};
		dom.prevTree = popComponent.render({
			props: { ...componentProps },
			state: componentState,
		});
		dom.prevTree.children = dom.filterValidPopObjects(dom.prevTree);
		dom.renderFn = () =>
			popComponent.render({
				props: { ...componentProps },
				state: componentState,
			});
		dom.updateElement(root, dom.prevTree);
		root.addEventListener(constants.refreshDOMDefaultAction, () => {
			POP.refresh();
		});
	},
};

export default POP;
