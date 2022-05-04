import dom from "./dom-module";

export const POP = {
	create: (elementTag, elementChildren = [], elementProps = {}) => {
		if (typeof elementTag === "string") {
			return {
				tag: elementTag,
				props: elementProps,
				children: elementChildren,
			};
		}
		return;
	},
	use: (popComponent, componentChildren = [], componentProps = {}) => {
		if (popComponent.render) {
			const rendered = popComponent.render({ props: { ...componentProps } });
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
				parent = POP.use(rendered.tag, componentChildren, {});
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
	root: (popComponent) => {
		const root = document.createElement("div");
		root.id = "root";
		document.body.appendChild(root);
		dom.root = root;
		dom.prevTree = popComponent.render();
		dom.renderFn = popComponent.render;
		dom.updateElement(root, dom.prevTree);
		root.addEventListener("click", () => {
			const newTree = dom.renderFn();
			dom.updateElement(root, newTree, dom.prevTree);
			dom.prevTree = newTree;
		});
	},
};

export default POP;
