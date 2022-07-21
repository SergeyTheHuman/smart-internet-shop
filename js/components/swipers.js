import Swiper from 'swiper/bundle'

if (document.querySelector('.hero__swiper')) {
	const heroSwiper = new Swiper('.hero__swiper', {
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

if (document.querySelector('.compare-swiper')) {
	const compareSwiper = new Swiper('.compare-swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		grabCursor: true,
		navigation: {
			prevEl: '.compare-button-prev',
			nextEl: '.compare-button-next',
		},
		pagination: {
			el: '.compare-pagination',
			type: 'bullets',
		},
		breakpoints: {
			375: {
				slidesPerView: 1.4,
			},
			550: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 'auto',
				spaceBetween: 10,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
		},
	})
}

if (document.querySelector('.product-one__thumbs')) {
	const thumbsSwiper = new Swiper('.product-one__thumbs', {
		slidesPerView: 3,
		spaceBetween: 8,
		grabCursor: true,
		navigation: {
			prevEl: '.thumbs__prev',
			nextEl: '.thumbs__next',
		},
	})
}
