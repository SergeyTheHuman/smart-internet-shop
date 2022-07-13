import { isWebp } from './components/isWebp.js'
import Swiper from 'swiper/bundle'
import './components/listeners.js'

isWebp()

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
