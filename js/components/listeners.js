import { Accordion } from './accordion.js'

const $headerSearchBtn = document.querySelector('.button__icon--header-search')
const $headerViewedBtn = document.querySelector('.button__icon--header-viewed')
const $headerHeartBtn = document.querySelector('.button__icon--header-heart')
const $headerCompareBtn = document.querySelector('.button__icon--header-compare')
const $headerCartBtn = document.querySelector('.button__icon--header-cart')

const $cartBtns = document.querySelectorAll('.button__icon--cart')
const $favoriteBtns = document.querySelectorAll('.button__icon--heart')
const $compareBtns = document.querySelectorAll('.button__icon--compare')

$headerSearchBtn.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('Нажата кнопка поиска')
})
$headerViewedBtn.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('Нажата кнопка "просмотренные"')
})
$headerHeartBtn.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('Нажата кнопка "избранные"')
})
$headerCompareBtn.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('Нажата кнопка сравнения')
})
$headerCartBtn.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('Нажата кнопка корзины')
})

$cartBtns.forEach((el) =>
	el.addEventListener('click', (e) => {
		if (!el.classList.contains('added-to-cart')) {
			el.classList.add('added-to-cart')
		} else {
			el.classList.remove('added-to-cart')
		}
	})
)
$favoriteBtns.forEach((el) =>
	el.addEventListener('click', (e) => {
		if (!el.classList.contains('favorite-checked')) {
			el.classList.add('favorite-checked')
		} else {
			el.classList.remove('favorite-checked')
		}
	})
)
$compareBtns.forEach((el) =>
	el.addEventListener('click', (e) => {
		if (!el.classList.contains('compare-checked')) {
			el.classList.add('compare-checked')
		} else {
			el.classList.remove('compare-checked')
		}
	})
)

document.addEventListener('DOMContentLoaded', () => {
	const $catalogTitle = document.querySelector('.catalog__title')
	if (window.innerWidth < 992) {
		$catalogTitle.textContent = 'Каталог'
	} else {
		$catalogTitle.textContent = 'Каталог товаров'
	}
	if (window.innerWidth < 550) {
		const accordion1 = new Accordion('.footer__accordion--1')
		const accordion2 = new Accordion('.footer__accordion--2')
		const accordion3 = new Accordion('.footer__accordion--3')
	}
})

const $buttonMore = document.querySelector('.nav__list')
$buttonMore.addEventListener('click', (e) => {
	document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
	$buttonMore.classList.add('active')
})

const $buttonCatalog = document.querySelector('.catalog')
$buttonCatalog.addEventListener('click', (e) => {
	document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
	$buttonCatalog.classList.add('active')
})

const $buttonSearch = document.querySelector('.nav__search')
$buttonSearch.addEventListener('click', (e) => {
	document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
	$buttonSearch.classList.add('active')
})

const $closeBtns = document.querySelectorAll('[class*="-cross"]')
$closeBtns.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.stopPropagation()
		const $currentMenu = e.target.closest('.active')
		$currentMenu.classList.remove('active')
	})
})
