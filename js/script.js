const closeButton = document.querySelector('.nav__btn-close');
const openButton = document.querySelector('.nav__btn-open');
const nav = document.querySelector('.nav');

closeButton.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
});

openButton.addEventListener('click', () => {
    nav.classList.add('navigation-open');
});

const colorLand = '#8ed2c5';
const colorWater = '#ffffff';
const colorLines = '#0c2940';
const zoom = 2;

const mapStyles = [
    {
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'administrative',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [
            {
                visibility: 'on',
            },
            {
                color: colorLines,
            },
        ],
    },
    {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: colorLand,
            },
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'road',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: colorWater,
            },
        ],
    },
];

const positions = {
    portoseguro: {
        coord: { lat: -16.44403, lng: -39.06533 },
        title: 'Porto Seguro',
    },
};

function initMap() {
    const styledMapType = new google.maps.StyledMapType(mapStyles);
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -5.023, lng: -10.556 },
        zoom: zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        minZoom: zoom - 1,
        maxZoom: zoom + 3,
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    const marker = new google.maps.Marker({
        position: positions.portoseguro.coord,
        title: positions.portoseguro.title,
        custom: 'sim',
        map: map,
    });

    const toolTip = new google.maps.InfoWindow({
        content: positions.portoseguro.title,
    });

    marker.addListener('mouseover', () => {
        toolTip.open(map, marker);
    });

    marker.addListener('mouseout', () => {
        toolTip.close(map, marker);
    });

    marker.addListener('click', (e) => {
        console.log(marker);
    });
}
