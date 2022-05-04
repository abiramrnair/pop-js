export const dom = {
	generateElement: (popObject) => {
		if (typeof popObject === "string") {
			return document.createTextNode(popObject);
		}

		const parentArgs = popObject.tag.split("|");
		const parent = document.createElement(parentArgs[0]);

		if (parentArgs[1]) {
			if (parentArgs[1].includes("class=")) {
				parent.className = parentArgs[1].split("=")[1];
			} else if (parentArgs[1].includes("id=")) {
				parent.id = parentArgs[1].split("=")[1];
			}
		}
		if (parentArgs[2]) {
			if (parentArgs[2].includes("class=")) {
				parent.className = parentArgs[2].split("=")[1];
			} else if (parentArgs[2].includes("id=")) {
				parent.id = parentArgs[2].split("=")[1];
			}
		}
		Object.keys(popObject.props).forEach((key) => {
			parent[key] = popObject.props[key];
		});
		popObject.children
			.map(dom.generateElement)
			.forEach((node) => parent.appendChild(node));

		return parent;
	},
	compareElements: (popNodeOne, popeNodeTwo) => {
		return (
			typeof popNodeOne !== typeof popeNodeTwo ||
			(typeof popNodeOne === "string" && popNodeOne !== popeNodeTwo) ||
			popNodeOne.tag !== popeNodeTwo.tag
		);
	},
	updateElement: (parentNode, newNode, oldNode, index = 0) => {
		if (!oldNode) {
			parentNode.appendChild(dom.generateElement(newNode));
		} else if (!newNode) {
			parentNode.removeChild(parentNode.childNodes[index]);
		} else if (dom.compareElements(newNode, oldNode)) {
			parentNode.replaceChild(
				dom.generateElement(newNode),
				parentNode.childNodes[index]
			);
		} else if (newNode.tag) {
			const newLength = newNode.children.length;
			const oldLength = oldNode.children.length;
			for (let i = 0; i < newLength || i < oldLength; i++) {
				dom.updateElement(
					parentNode.childNodes[index],
					newNode.children[i],
					oldNode.children[i],
					i
				);
			}
		}
	},
};

export default dom;
