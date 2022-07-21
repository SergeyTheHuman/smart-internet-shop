
if (document.getElementById('contacts__map')) {
	function initYandexMap() {
		let map = new ymaps.Map('contacts__map', {
			center: [59.92459416911864, 30.378338001382485],
			zoom: 12,
		})

		// Создание геообъекта с типом точка (метка) без текста.
		const geoPoint1 = new ymaps.Placemark(
			[59.944126447716435, 30.377038384421212], // куда вставить метку
			{
				balloonContent: `
					<div class="myballoon"> 
						<h5 class="myballoon__name">Магазин №3</h5>
						<div class="myballoon__address">Невский 140</div>
					</div>
				`,
			},
			{
				iconLayout: 'default#image', // значение 'default#image' обязательно
				iconImageHref: '../images/content-icons/map-mark.svg', // путь к изображению
				iconImageSize: [50, 50], // размер изображения
				iconImageOffset: [0, 0], // сдвиг значка относительно точки привязки (задается, если "ножка" значка не находится в левом верхнем углу изображения)
			}
		)

		// Создание геообъекта с типом точка (метка) c баллуном текста.
		const geoPoint2 = new ymaps.Placemark(
			[59.92532662191352, 30.402799747598326],
			{
				balloonContent: `
					<div class="myballoon"> 
						<h5 class="myballoon__name">Магазин №1</h5>
						<div class="myballoon__address">Невский 140</div>
					</div>
				`,
			},
			{
				iconLayout: 'default#image',
				iconImageHref: '../images/content-icons/map-mark.svg',
				iconImageSize: [40, 56],
				iconImageOffset: [0, 0],
			}
		)

		const geoPoint3 = new ymaps.Placemark(
			[59.920994875490514, 30.33618297670637],
			{
				balloonContent: `
					<div class="myballoon"> 
						<h5 class="myballoon__name">Магазин №2</h5>
						<div class="myballoon__address">Невский 140</div>
					</div>
				`,
			},
			{
				iconLayout: 'default#image',
				iconImageHref: '../images/content-icons/map-mark.svg',
				iconImageSize: [40, 56],
				iconImageOffset: [0, 0],
			}
		)

		const geoPoint4 = new ymaps.Placemark(
			[59.936729938080944, 30.37284483731999],
			{
				balloonContent: `
					<div class="myballoon"> 
						<h5 class="myballoon__name">Магазин №4</h5>
						<div class="myballoon__address">Невский 140</div>
					</div>
				`,
			},
			{
				iconLayout: 'default#image',
				iconImageHref: '../images/content-icons/map-mark.svg',
				iconImageSize: [40, 56],
				iconImageOffset: [0, 0],
			}
		)

		// Размещение геообъекта на карте.
		map.geoObjects.add(geoPoint1)
		map.geoObjects.add(geoPoint2)
		map.geoObjects.add(geoPoint3)
		map.geoObjects.add(geoPoint4)

		map.controls.remove('geolocationControl') // удаляем геолокацию
		map.controls.remove('searchControl') // удаляем поиск
		map.controls.remove('trafficControl') // удаляем контроль трафика
		map.controls.remove('typeSelector') // удаляем тип
		map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
		map.controls.remove('rulerControl') // удаляем контрол правил
		// map.controls.remove('zoomControl') // удаляем контрол зуммирования
		// map.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
	}

	ymaps.ready(initYandexMap)
}
