import { isWebp } from './components/isWebp.js'

isWebp()

const $cartBtn = document.querySelector('.button__icon--cart')
const $favoriteBtn = document.querySelector('.button__icon--heart')
const $compareBtn = document.querySelector('.button__icon--compare')

$cartBtn.addEventListener('click', (e) => {
	if (!$cartBtn.classList.contains('added-to-cart')) {
		$cartBtn.classList.add('added-to-cart')
	} else {
		$cartBtn.classList.remove('added-to-cart')
	}
})

$favoriteBtn.addEventListener('click', (e) => {
	if (!$favoriteBtn.classList.contains('favorite-checked')) {
		$favoriteBtn.classList.add('favorite-checked')
	} else {
		$favoriteBtn.classList.remove('favorite-checked')
	}
})
$compareBtn.addEventListener('click', (e) => {
	if (!$compareBtn.classList.contains('compare-checked')) {
		$compareBtn.classList.add('compare-checked')
	} else {
		$compareBtn.classList.remove('compare-checked')
	}
})
