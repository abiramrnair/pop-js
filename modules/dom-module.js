import constants from "./constants-module";

export const dom = {
	generateElement: (popObject) => {
		if (typeof popObject === constants.createPOPElementTagType) {
			return document.createTextNode(popObject);
		}
		const parentArgs = popObject.tag.split(constants.popObjectTagSeparator);
		const parent = document.createElement(parentArgs[0]);
		if (parentArgs[1]) {
			if (parentArgs[1].includes(constants.popElementClassIdentifier)) {
				parent.className = parentArgs[1].split(
					constants.popElementAttributeSeparator
				)[1];
			} else if (parentArgs[1].includes(constants.popElementIdIdentifier)) {
				parent.id = parentArgs[1].split(
					constants.popElementAttributeSeparator
				)[1];
			}
		}
		if (parentArgs[2]) {
			if (parentArgs[2].includes(constants.popElementClassIdentifier)) {
				parent.className = parentArgs[2].split(
					constants.popElementAttributeSeparator
				)[1];
			} else if (parentArgs[2].includes(constants.popElementIdIdentifier)) {
				parent.id = parentArgs[2].split(
					constants.popElementAttributeSeparator
				)[1];
			}
		}
		Object.keys(popObject.props).forEach((key) => {
			parent[key] = popObject.props[key];
		});
		if (Array.isArray(popObject.children)) {
			popObject.children
				.map(dom.generateElement)
				.forEach((node) => parent.appendChild(node));
		}
		return parent;
	},
	sameProps: (propsOne, propsTwo) => {
		if (propsOne === propsTwo) return true;
		if (
			typeof propsOne !== 'object' ||
			typeof propsTwo !== 'object' ||
			propsOne == null ||
			propsTwo == null
		) {
			return false;
		}
		const keysOne = Object.keys(propsOne);
		const keysTwo = Object.keys(propsTwo);
		if (keysOne.length !== keysTwo.length) {
			return false;
		}
		let result = true;
		keysOne.forEach((key) => {
			if (!keysTwo.includes(key)) {
				result = false;
			}
			if (
				typeof propsOne[key] === 'function' ||
				typeof propsTwo[key] === 'function'
			) {
				if (propsOne[key].toString() !== propsTwo[key].toString()) {
					result = false;
				}
			}
			if (!dom.sameProps(propsOne[key], propsTwo[key])) {
				result = false;
			}
		});
		return result;
	},
	compareElements: (popNodeOne, popeNodeTwo) => {
		return (
			typeof popNodeOne !== typeof popeNodeTwo ||
			(typeof popNodeOne === constants.createPOPElementTagType &&
				popNodeOne !== popeNodeTwo) ||
			popNodeOne.tag !== popeNodeTwo.tag ||
			(popNodeOne.props &&
				popeNodeTwo.props && !dom.sameProps(popNodeOne.props, popeNodeTwo.props)
			)
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
	initializeState: (popComponent, stateKey) => {
		if (popComponent.render && popComponent.set && stateKey) {
			if (!dom.state[stateKey]) {
				dom.state[stateKey] = {};
				popComponent.set(dom.state[stateKey]);
			}
			popComponent
				.render({ props: {}, state: {} })
				.children.forEach((child) => {
					if (child) {
						dom.initializeState(child, child.stateKey);
					}
				});
		}
	},
	filterValidPopObjects: (domTree) => {
		if (domTree.children && Array.isArray(domTree.children)) {
			const treeChildren = domTree.children.filter(
				(child) => child && Object.keys(child).length
			);
			treeChildren.forEach((obj) => {
				if (obj && obj.children) {
					obj.children = dom.filterValidPopObjects(obj);
				}
			});
			return treeChildren;
		}
		return [];
	},
};

export default dom;
