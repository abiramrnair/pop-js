import constants from "./constants-module";

export const dom = {
	init: () => {
		dom.state = {};
		dom.renderStore = {};
		dom.stateCheckSet = new Set();
		window.addEventListener("hashchange", () => {
			const path = window.location.href.split("#!")[1];
			if (dom.routes && dom.currPath !== path) {
				window.location.reload();
			}
		});
	},
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
		if (propsOne.toString() === propsTwo.toString()) return true;
		if (
			typeof propsOne !== constants.typeofPropsObjectIdentifier ||
			typeof propsTwo !== constants.typeofPropsObjectIdentifier ||
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
				typeof propsOne[key] === constants.typeofPropsFunctionIdentifier ||
				typeof propsTwo[key] === constants.typeofPropsFunctionIdentifier
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
				popeNodeTwo.props &&
				!dom.sameProps(popNodeOne.props, popeNodeTwo.props))
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
	initializeState: (popComponent, accessKey) => {
		if (popComponent.render && popComponent.set && accessKey) {
			if (!dom.state[accessKey]) {
				dom.state[accessKey] = {};
				popComponent.set({
					state: dom.state[accessKey],
				});
			}
			popComponent
				.render({ props: {}, state: {} })
				.children.forEach((child) => {
					if (child) {
						dom.initializeState(child, child.accessKey);
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
	getComponentStateKey: (component, loopKey) => {
		const hasSet =
			typeof component === constants.typeofPropsFunctionIdentifier
				? component() && component().set
				: component && component.set;
		const location = new Error();
		const formattedLoopKey = loopKey ? String(loopKey) : null;
		const stack = location.stack.split("\n");
		const isLooped =
			stack.join("").includes(constants.forLoopIdentifier) ||
			stack.join("").includes(constants.mapLoopIdentifier);
		if (hasSet && isLooped && !formattedLoopKey) {
			throw new Error(constants.popComponentUniqueKeyError);
		}
		let cutOffIndex;
		for (let i = stack.length - 1; i >= 0; i--) {
			if (stack[i].includes(constants.renderFunctionIdentifer)) {
				cutOffIndex = i;
				break;
			}
		}
		const key = stack[2].includes(constants.rootFunctionIdentifier)
			? stack.join("").replace(constants.stateKeyFilterString, "")
			: stack
					.slice(0, cutOffIndex + 1)
					.join("")
					.replace(constants.stateKeyFilterString, "");
		return `${key}${formattedLoopKey ? formattedLoopKey : ""}`;
	},
	cleanState: () => {
		Object.keys(dom.state).forEach((key) => {
			if (!dom.stateCheckSet.has(key)) {
				delete dom.state[key];
			}
		});
	},
};

export default dom;
