import compute from "../lib/compute";

@compute
class Calculator {
	constructor(el) {
		this.name = 'Calculator'

		this.oResult = el.getElementsByClassName('result')[0]
		this.oBtnGroup = el.getElementsByClassName('btn-group')[0]
		this.oInputs = el.getElementsByClassName('num-input')
	}

	init() {
		this.bindEvent()
	}

	bindEvent() {
		this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false)
	}

	onBtnClick(ev) {
		const e = ev || window.event,
			tar = e.target || e.srcElement,
			tagName = tar.tagName.toLowerCase()

		console.log('tagName==>', tagName);
		if (tagName === 'button') {
			const method = tar.getAttribute('data-method'),
				fVal = Number(this.oInputs[0].value.replace(/\s+/g, '')) || 0,
				rVal = Number(this.oInputs[1].value.replace(/\s+/g, '')) || 0
			this.setResult(method, fVal, rVal)
		}
	}

	setResult(method, fVal, rVal) {
		this.oResult.innerHTML = this[method](fVal, rVal)
	}

}

export {Calculator}
