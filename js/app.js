import { isWebp } from './components/isWebp.js'
import { Accordion as AccISV } from './components/accordion.js'
import Accordion from 'accordion-js'
import noUiSlider from 'nouislider'
import { Tabs } from './components/tabs.js'
import './components/swipers.js'
import './components/selects.js'
import './components/yandexMap.js'

isWebp()

// header catalog title
const $catalogTitle = document.querySelector('.catalog__title')

// price slider vars
const $priceRange = document.querySelector('.price-filter__range')
const $inputPriceFrom = document.querySelector('.price-filter__input--from')
const $inputPriceTo = document.querySelector('.price-filter__input--to')

// header buttons
const $headerSearchBtn = document.querySelector('.button__icon--header-search')
const $headerViewedBtn = document.querySelector('.button__icon--header-viewed')
const $headerHeartBtn = document.querySelector('.button__icon--header-heart')
const $headerHeartSpan = document.querySelector('.header__heart span')
const $headerCompareBtn = document.querySelector('.button__icon--header-compare')
const $headerCartBtn = document.querySelector('.button__icon--header-cart')
const $headerLoginBtn = document.querySelector('.header__login')

// header buttons on mobile
const $buttonMore = document.querySelector('.nav__list')
const $buttonCatalog = document.querySelector('.catalog')
const $buttonSearch = document.querySelector('.nav__search')
const $closeBtns = document.querySelectorAll('[class*="-cross"]')

// page compare vars
const $compareWrapper = document.querySelector('.compare__wrapper')
const $compareControls = document.querySelector('.compare__controls')
const $compareCheckbox = document.querySelector('.compare__different')

// compare page
const $checkboxOnlyDifferentFake = document.querySelector('.compare__different')
const $checkboxOnlyDifferent = document.querySelector('.checkbox__input--hidden')
const $compareTable = document.querySelector('.compare__table')

// product cards
const $products = document.querySelectorAll('.product-card')
const $productOne = document.querySelectorAll('.product-one')

// contacts page
const $buttonContactsPage = document.querySelector('.contacts-form__button')
const $contactsFormFirstColumn = document.querySelector('[data-contacts-col="first"]')
const $contactsFormLastColumn = document.querySelector('[data-contacts-col="last"]')

if (document.querySelector('.product-tabs')) {
	const productTabs = new Tabs('.product-tabs')
}

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

if (document.querySelector('.catalog-section__filters-wrapper')) {
	const accordionFilters = new Accordion('.catalog-section__filters-wrapper', {
		duration: 300,
		showMultiple: true,
	})
}

if (document.querySelector('.account-history__content')) {
	const accordionFilters = new Accordion('.account-history__content', {
		duration: 300,
		showMultiple: true,
	})
}

window.addEventListener('resize', (e) => {
	// Changing text content of catalog
	if (window.innerWidth < 992) {
		$catalogTitle.textContent = 'Каталог'
	} else {
		$catalogTitle.textContent = 'Каталог товаров'
	}

	// Checkbox on compare page
	if ($compareCheckbox && $compareWrapper && $compareControls) {
		if (window.innerWidth < 821) {
			$compareWrapper.appendChild($compareCheckbox)
		} else {
			$compareControls.appendChild($compareCheckbox)
		}
	}

	// Button on contacts page
	if ($buttonContactsPage && $contactsFormFirstColumn && $contactsFormLastColumn) {
		if (window.innerWidth < 678) {
			$contactsFormLastColumn.appendChild($buttonContactsPage)
		} else {
			$contactsFormFirstColumn.appendChild($buttonContactsPage)
		}
	}
})

document.addEventListener('DOMContentLoaded', () => {
	// Changing text content of catalog
	if (window.innerWidth < 992) {
		$catalogTitle.textContent = 'Каталог'
	} else {
		$catalogTitle.textContent = 'Каталог товаров'
	}

	// Checkbox on compare page
	if ($compareCheckbox && $compareWrapper && $compareControls) {
		if (window.innerWidth < 821) {
			$compareWrapper.appendChild($compareCheckbox)
		} else {
			$compareControls.appendChild($compareCheckbox)
		}
	}

	// Footer accordion
	if (window.innerWidth < 550) {
		const accordion1 = new AccISV('.footer__accordion--1')
		const accordion2 = new AccISV('.footer__accordion--2')
		const accordion3 = new AccISV('.footer__accordion--3')
	}

	// Button on contacts page
	if ($buttonContactsPage && $contactsFormFirstColumn && $contactsFormLastColumn) {
		if (window.innerWidth < 678) {
			$contactsFormLastColumn.appendChild($buttonContactsPage)
		} else {
			$contactsFormFirstColumn.appendChild($buttonContactsPage)
		}
	}

	// Header favorite button
	if ($headerHeartBtn) {
		if ($headerHeartSpan.textContent > 0) {
			$headerHeartSpan.style.display = 'flex'
			$headerHeartBtn.classList.add('favorite-checked')
		} else {
			$headerHeartSpan.style.display = 'none'
			$headerHeartBtn.classList.remove('favorite-checked')
		}
	}
	// Header favorite button
	const $headerCompareSpan = $headerCompareBtn.querySelector('span')
	if ($headerCompareBtn) {
		if ($headerCompareSpan.textContent > 0) {
			$headerCompareSpan.style.display = 'flex'
			$headerCompareBtn.classList.add('compare-checked')
		} else {
			$headerCompareSpan.style.display = 'none'
			$headerCompareBtn.classList.remove('compare-checked')
		}
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
		console.log('Нажата кнопка "просмотренные"')
	}
	if (e.target.classList.contains('button__icon--header-heart')) {
		console.log('Нажата кнопка "избранные"')
	}
	if (e.target.classList.contains('button__icon--header-compare')) {
		console.log('Нажата кнопка сравнения')
	}
	if (e.target.classList.contains('button__icon--header-cart')) {
		e.preventDefault()
		console.log('Нажата кнопка корзины')
	}
	if (e.target.classList.contains('header__login')) {
		e.target.classList.toggle('header__login--active')
	}
	if (!e.target.closest('.header__login-menu') && !e.target.classList.contains('header__login')) {
		$headerLoginBtn.classList.remove('header__login--active')
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

	// Thumbs slider
	if (e.target.classList.contains('thumb-img')) {
		const self = e.target
		const src = self.getAttribute('src')
		const mainImgParent = e.target.closest('.product-one__image')
		const mainImg = mainImgParent.querySelector('.product-one__main-img')

		mainImg.setAttribute('src', src)
	}

	// Account password show
	if (e.target.classList.contains('account-pass__watch') || e.target.parentNode.classList.contains('account-pass__watch')) {
		const $currentInputWrapper = e.target.closest('.account-pass__input-wrapper')
		const $currentInput = $currentInputWrapper.querySelector('input')
		$currentInput.setAttribute('type', 'text')
		$currentInputWrapper.classList.add('password-show')
	}
	if (e.target.classList.contains('account-pass__watch-off') || e.target.parentNode.classList.contains('account-pass__watch-off')) {
		const $currentInputWrapper = e.target.closest('.account-pass__input-wrapper')
		const $currentInput = $currentInputWrapper.querySelector('input')
		$currentInput.setAttribute('type', 'password')
		$currentInputWrapper.classList.remove('password-show')
	}
})

if ($checkboxOnlyDifferent && $compareTable) {
	$checkboxOnlyDifferent.addEventListener('change', () => {
		if ($checkboxOnlyDifferent.checked) {
			$compareTable.classList.add('only-different')
		} else {
			$compareTable.classList.remove('only-different')
		}
	})
}

$closeBtns.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.stopPropagation()
		const $currentMenu = e.target.closest('.active')
		$currentMenu.classList.remove('active')
	})
})

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

if ($productOne) {
	$productOne.forEach((el) => {
		//Prices vars
		const $priceBlock = el.querySelector('[data-price]')
		const discount = parseInt($priceBlock.getAttribute('data-discount-percent'))
		const mainprice = parseInt($priceBlock.getAttribute('data-price'))
		const $newPrice = $priceBlock.querySelector('.product-card__new-price')

		if (discount) {
			const $oldPriceHtml = `
				<div class="product-card__old-price">${mainprice} ₽</div>
			`
			let priceWithDiscount = (mainprice * (1 - discount * 0.01)).toFixed(0)
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
