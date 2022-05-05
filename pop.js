import constants from "./modules/constants-module";
import dom from "./modules/dom-module";

export const POP = {
	create: (elementTag, elementChildren = [], elementProps = {}) => {
		if (typeof elementTag === constants.createPOPElementTagType) {
			return {
				tag: elementTag,
				props: elementProps,
				children: elementChildren,
			};
		}
	},
	use: (popComponent, componentChildren = [], componentProps = {}) => {
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
