import dom from "./dom-module";

export const POP = {
	create: (elementTag, elementProps, [...elementChildren]) => {
		return { tag: elementTag, props: elementProps, children: elementChildren };
	},
	root: (popComponent) => {
		const root = document.createElement("div");
		root.id = "root";
		document.body.appendChild(root);
		dom.root = root;
		dom.prevTree = popComponent.render();
		dom.renderFn = popComponent.render;
		dom.updateElement(root, popComponent.render());
		root.addEventListener("click", () => {
			dom.updateElement(root, dom.renderFn(), dom.prevTree);
			dom.prevTree = dom.renderFn();
		});
	},
};

export default POP;
