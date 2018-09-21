ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Студия Nerds',
            balloonContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
        }, {
            
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [155, 190],
            iconImageOffset: [-50, -190]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)
});