import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|'}) {
  addition = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
	return new Array(repeatTimes).fill(String(str)).map(el => el.concat(addition)).join(separator);
}
