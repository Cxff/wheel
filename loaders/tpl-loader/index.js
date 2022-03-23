const {tplReplace} = require('../utils')
const {getOptions} = require('loader-utils')

function tplLoader(source) {
	source = source.replace(/\s+/g, '')
	const options = this.getOptions()
	console.log('this.resourcePath=>', this.resourcePath);
	const _log = options.log ? `console.log('From: ${this.resourcePath}')` : ''
	return `
		export default (options) => {
			${tplReplace.toString()}
			${_log.toString()}
			return tplReplace('${source}', options)
		}
	`
}

module.exports = tplLoader

// function tpl(options) {
// 	function tplReplace(template, replaceObject) {
// 		return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
// 			return replaceObject[key]
// 		})
// 	}
//
// 	return tplReplace(`${source}`, options)
// }
