import tpl from './info.tpl'

const aApp = document.querySelector('#app')

const info = {
	name: '小灰',
	age: 25,
	career: 'Web前端开发',
	hobby: '没有'
}

aApp.innerHTML = tpl(info)
