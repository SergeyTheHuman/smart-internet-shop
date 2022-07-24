import './custom-select.js'

if (document.querySelector('.catalog-products__select')) {
	customSelect('.catalog-products__select')
}

if (document.querySelector('.compare-choice__select')) {
	customSelect('.compare-choice__select')
}

if (document.querySelector('.pay-method__select')) {
	customSelect('.pay-method__select')
}

if (document.querySelector('.delivery-method__select')) {
	customSelect('.delivery-method__select')
}

if (document.querySelectorAll('.bottom-delivery-form__select')) {
	document.querySelectorAll('.bottom-delivery-form__select').forEach((el) => customSelect(el))
}

if (document.querySelectorAll('.viewed__select')) {
	document.querySelectorAll('.viewed__select').forEach((el) => customSelect(el))
}

if (document.querySelectorAll('.favorite__select')) {
	document.querySelectorAll('.favorite__select').forEach((el) => customSelect(el))
}

if (document.querySelectorAll('.account-personal__select')) {
	document.querySelectorAll('.account-personal__select').forEach((el) => customSelect(el))
}
