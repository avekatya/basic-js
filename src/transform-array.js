import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const controlSequences = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];

export default function transform(arr) {
  if (Array.isArray(arr)) {
		let resultArr = [];
		for(let i = 0; i < arr.length; i++) {
			const currElement = arr[i];
			switch(currElement) {
				case '--double-prev': {
					if(arr[i - 2] != '--discard-next' && 
						arr[i - 1] != undefined &&
						isNotControlSequence(arr[i - 1])) {
						resultArr.push(arr[i - 1]);
				}
			} break;
			case '--double-next': {
				if(arr[i + 1] != undefined && isNotControlSequence(arr[i + 1])) {
					resultArr.push(arr[i + 1]);							
				}
			} break;
			case '--discard-prev': {
				if(arr[i - 2] != '--discard-next' && 
					arr[i - 1] != undefined &&
					isNotControlSequence(arr[i - 1])) {
					resultArr.pop();
				}
			} break;
			case '--discard-next': {
				i++;
			} break;
			default: resultArr.push(currElement);
		}
	}
	return resultArr;
	} else {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}
}

const isNotControlSequence = (el) => {
	return !controlSequences.includes(el);
} 