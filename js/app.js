import { isWebp } from './components/isWebp.js'
import Swiper from 'swiper/bundle'
import './components/listeners.js'
import { Accordion as AccISV } from './components/accordion.js'
import Accordion from 'accordion-js'
import './components/custom-select.js'
import noUiSlider from 'nouislider'

isWebp()

// price slider vars
const $priceRange = document.querySelector('.price-filter__range')
const $inputPriceFrom = document.querySelector('.price-filter__input--from')
const $inputPriceTo = document.querySelector('.price-filter__input--to')

// header buttons
const $headerSearchBtn = document.querySelector('.button__icon--header-search')
const $headerViewedBtn = document.querySelector('.button__icon--header-viewed')
const $headerHeartBtn = document.querySelector('.button__icon--header-heart')
const $headerCompareBtn = document.querySelector('.button__icon--header-compare')
const $headerCartBtn = document.querySelector('.button__icon--header-cart')

// header buttons on mobile
const $buttonMore = document.querySelector('.nav__list')
const $buttonCatalog = document.querySelector('.catalog')
const $buttonSearch = document.querySelector('.nav__search')
const $closeBtns = document.querySelectorAll('[class*="-cross"]')

if ($priceRange && $inputPriceFrom && $inputPriceTo) {
	noUiSlider.create($priceRange, {
		start: [3000, 30000],
		connect: true,
		step: 500,
		range: {
			min: 5000,
			max: 30000,
		},
	})

	$priceRange.noUiSlider.on('update', function (values, handle) {
		let value = values[handle]
		if (handle) {
			$inputPriceTo.value = parseInt(value).toFixed(0)
		} else {
			$inputPriceFrom.value = parseInt(value).toFixed(0)
		}
	})

	$inputPriceFrom.addEventListener('change', function () {
		$priceRange.noUiSlider.set([this.value, null])
	})
	$inputPriceTo.addEventListener('change', function () {
		$priceRange.noUiSlider.set([null, this.value])
	})
}

if (document.querySelector('.hero__swiper')) {
	const swiper = new Swiper('.hero__swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,
		pagination: {
			el: '.hero__swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 2000,
		},
	})
}

if (document.querySelector('.catalog-section__filters-wrapper')) {
	const accordionFilters = new Accordion('.catalog-section__filters-wrapper', {
		duration: 300,
		showMultiple: true,
	})
}

if (document.querySelector('.catalog-products__select')) {
	customSelect('.catalog-products__select')
}

const $catalogTitle = document.querySelector('.catalog__title')
window.addEventListener('resize', (e) => {
	if (window.innerWidth < 992) {
		$catalogTitle.textContent = 'Каталог'
	} else {
		$catalogTitle.textContent = 'Каталог товаров'
	}
})

document.addEventListener('DOMContentLoaded', () => {
	const $catalogTitle = document.querySelector('.catalog__title')
	if (window.innerWidth < 992) {
		$catalogTitle.textContent = 'Каталог'
	} else {
		$catalogTitle.textContent = 'Каталог товаров'
	}
	if (window.innerWidth < 550) {
		const accordion1 = new AccISV('.footer__accordion--1')
		const accordion2 = new AccISV('.footer__accordion--2')
		const accordion3 = new AccISV('.footer__accordion--3')
	}
})

document.addEventListener('click', (e) => {
	// Rating actions
	if (e.target.classList.contains('product-card__rating-item')) {
		const currentCard = e.target.closest('.product-card')
		const ratingValue = parseInt(e.target.getAttribute('data-rating-value'))
		e.target.closest('[data-rating-total]').dataset.ratingTotal = ratingValue
	}

	// Filters
	if (e.target.classList.contains('catalog-section__filters-open-btn')) {
		const $filtersSidebar = document.querySelector('.catalog-section__filters')
		$filtersSidebar.classList.toggle('opened')
	}

	// Header buttons
	if (e.target.classList.contains('button__icon--header-search')) {
		e.preventDefault()
		console.log('Нажата кнопка поиска')
	}
	if (e.target.classList.contains('button__icon--header-viewed')) {
		e.preventDefault()
		console.log('Нажата кнопка "просмотренные"')
	}
	if (e.target.classList.contains('button__icon--header-heart')) {
		e.preventDefault()
		console.log('Нажата кнопка "избранные"')
	}
	if (e.target.classList.contains('button__icon--header-compare')) {
		e.preventDefault()
		console.log('Нажата кнопка сравнения')
	}
	if (e.target.classList.contains('button__icon--header-cart')) {
		e.preventDefault()
		console.log('Нажата кнопка корзины')
	}

	// Buttons
	if (e.target.classList.contains('button__icon--cart')) {
		const self = e.target
		if (!self.classList.contains('added-to-cart')) {
			self.classList.add('added-to-cart')
		} else {
			self.classList.remove('added-to-cart')
		}
	}
	if (e.target.classList.contains('button__icon--heart')) {
		const self = e.target
		if (!self.classList.contains('favorite-checked')) {
			self.classList.add('favorite-checked')
		} else {
			self.classList.remove('favorite-checked')
		}
	}
	if (e.target.classList.contains('button__icon--compare')) {
		const self = e.target
		if (!self.classList.contains('compare-checked')) {
			self.classList.add('compare-checked')
		} else {
			self.classList.remove('compare-checked')
		}
	}

	// Nav list
	if (e.target.closest('.nav__list')) {
		document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
		$buttonMore.classList.add('active')
	}

	// Catalog
	if (e.target.closest('.catalog')) {
		document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
		$buttonCatalog.classList.add('active')
	}

	// Search
	if (e.target.closest('.nav__search')) {
		document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
		$buttonSearch.classList.add('active')
	}
})

$closeBtns.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.stopPropagation()
		const $currentMenu = e.target.closest('.active')
		$currentMenu.classList.remove('active')
	})
})

const $products = document.querySelectorAll('.product-card')
if ($products) {
	$products.forEach((el) => {
		//Prices vars
		const $priceBlock = el.querySelector('[data-price]')
		const discount = parseInt($priceBlock.getAttribute('data-discount-percent'))
		const mainprice = parseInt($priceBlock.getAttribute('data-price'))
		const $newPrice = $priceBlock.querySelector('.product-card__new-price')

		if (discount) {
			const $oldPriceHtml = `
				<div class="product-card__old-price">${mainprice} ₽</div>
			`
			let priceWithDiscount = (mainprice * (1 - discount * 0.01)).toFixed(1)
			let priceDiff = (mainprice - priceWithDiscount).toFixed(1)
			$newPrice.textContent = `${priceWithDiscount} ₽`
			const $discountHtml = `
				<div class="product-card__discount"><span>${discount}%</span> — ${priceDiff} ₽</div>
			`

			$priceBlock.insertAdjacentHTML('afterbegin', $oldPriceHtml)
			$priceBlock.insertAdjacentHTML('beforeend', $discountHtml)
		} else {
			$newPrice.textContent = `${mainprice} ₽`
		}
	})
}
