import constants from "./modules/constants-module";
import dom from "./modules/dom-module";

export const POP = {
	create: (elementTag, elementChildren = [], elementProps = {}) => {
		if (typeof elementTag === constants.createPOPElementTagType) {
			return {
				tag: elementTag,
				props:
					!Object.keys(elementProps).length &&
					!Array.isArray(elementChildren) &&
					Object.keys(elementChildren).length
						? elementChildren
						: elementProps,
				children:
					!Array.isArray(elementChildren) &&
					Array.isArray(elementProps) &&
					elementProps.length
						? elementProps
						: elementChildren,
			};
		}
	},
	getState: (stateKey) => {
		if (dom.state[stateKey]) {
			const state = { ...dom.state[stateKey] };
			return state;
		}
		throw new Error(constants.stateKeyInvalidError);
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
			let componentState = {};
			if (popComponent.set && componentProps.stateKey) {
				if (!dom.state[componentProps.stateKey]) {
					dom.state[componentProps.stateKey] = {};
					popComponent.set(dom.state[componentProps.stateKey]);
					componentState = dom.state[componentProps.stateKey];
				} else {
					componentState = dom.state[componentProps.stateKey];
				}
			}
			if (popComponent.set && !componentProps.stateKey) {
				throw new Error(constants.stateKeyMissingError);
			}
			delete componentProps.stateKey;
			const rendered = popComponent.render({
				props: { ...componentProps },
				state: componentState,
			});
			const children = rendered.children;
			let parent;

			if (!rendered.tag.render) {
				parent = rendered;
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
		dom.updateElement(dom.root, newTree, dom.prevTree);
		dom.prevTree = newTree;
	},
	root: (popComponent, rootName) => {
		const root = document.createElement(constants.createRootElementTag);
		root.id =
			rootName && typeof rootName === constants.createPOPElementTagType
				? rootName
				: constants.createRootElementDefaultId;
		document.body.appendChild(root);
		dom.root = root;
		dom.state = {};
		dom.prevTree = popComponent.render();
		dom.renderFn = popComponent.render;
		dom.updateElement(root, dom.prevTree);
		root.addEventListener(constants.refreshDOMDefaultAction, () => {
			POP.refresh();
		});
	},
};

export default POP;
