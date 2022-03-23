function tplReplace(template, replaceObject) {
	console.log('template==>', template);
	return template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
		return replaceObject[key]
	})
}

module.exports = {
	tplReplace
}
