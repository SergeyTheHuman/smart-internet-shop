import { isWebp } from './components/isWebp.js'
import Swiper from 'swiper/bundle'
import './components/listeners.js'
import { Accordion as AccISV } from './components/accordion.js'
import Accordion from 'accordion-js'
import './components/custom-select.js'
import noUiSlider from 'nouislider'

isWebp()

const priceRange = document.querySelector('.price-filter__range')
const inputPriceFrom = document.querySelector('.price-filter__input--from')
const inputPriceTo = document.querySelector('.price-filter__input--to')

noUiSlider.create(priceRange, {
	start: [3000, 30000],
	connect: true,
	step: 500,
	range: {
		min: 5000,
		max: 30000,
	},
})

priceRange.noUiSlider.on('update', function (values, handle) {
	let value = values[handle]
	if (handle) {
		inputPriceTo.value = parseInt(value).toFixed(0)
	} else {
		inputPriceFrom.value = parseInt(value).toFixed(0)
	}
})

inputPriceFrom.addEventListener('change', function () {
	priceRange.noUiSlider.set([this.value, null])
})
inputPriceTo.addEventListener('change', function () {
	priceRange.noUiSlider.set([null, this.value])
})

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

const accordionFilters = new Accordion('.catalog-section__filters', {
	duration: 300,
	showMultiple: true,
	onOpen: function (currentElement) {
		console.log(currentElement)
	},
})

customSelect('.catalog-products__select')

const $catalogTitle = document.querySelector('.catalog__title')
window.addEventListener('resize', (e) => {
	if (window.innerWidth < 992) {
		$catalogTitle.textContent = 'Каталог'
	} else {
		$catalogTitle.textContent = 'Каталог товаров'
	}
})

document.addEventListener('click', (e) => {
	//Rating actions
	if (e.target.classList.contains('product-card__rating-item')) {
		const currentCard = e.target.closest('.product-card')
		const ratingValue = parseInt(e.target.getAttribute('data-rating-value'))
		e.target.closest('[data-rating-total]').dataset.ratingTotal = ratingValue
	}
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
