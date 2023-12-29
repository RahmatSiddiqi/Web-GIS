var mapView = new ol.View({
    center: ol.proj.fromLonLat([96.99414208891453, 5.245690322729215]),
    zoom: 16
});

var map = new ol.Map({
    target: 'map',
    view: mapView
});

var osmTile = new ol.layer.Tile({
    title: 'MAP',
    visible: true,
    source: new ol.source.OSM()
});


map.addLayer(osmTile);

var UleeReulengtile = new ol.layer.Tile({
    title: "Batas Ulee Reuleeng",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:batas_gampong',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(UleeReulengtile);

var Jalan = new ol.layer.Tile({
    title: "Jalan",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:jalan_pg',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Jalan);

var alu = new ol.layer.Tile({
    title: "alu",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:alu',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(alu);

var Lorong = new ol.layer.Tile({
    title: "Lorong",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:lorong',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Lorong);


var Paret = new ol.layer.Tile({
    title: "Paret",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:paret',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Paret);

var Paya = new ol.layer.Tile({
    title: "Paya",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:paya',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Paya);

var Lahan_kosong = new ol.layer.Tile({
    title: "Lahan Kosong",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:lahan_kosong',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Lahan_kosong);

var Rumah = new ol.layer.Tile({
    title: "Rumah",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:rumah',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Rumah);

var Sawah = new ol.layer.Tile({
    title: "Sawah",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:sawah',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Sawah);

var Kede = new ol.layer.Tile({
    title: "Kede",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:kede',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Kede);

var DapuBata = new ol.layer.Tile({
    title: "Dapu Bata",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:dapubata',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(DapuBata);

var Balaingaji = new ol.layer.Tile({
    title: "Balai Pengajian",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:balai_pengajian',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Balaingaji);

var Bale = new ol.layer.Tile({
    title: "Bale",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:bale',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(Bale);

var gali = new ol.layer.Tile({
    title: "Gali Gali",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:gali-gali',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(gali);

var gedung1 = new ol.layer.Tile({
    title: "Gedung 1",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:gali-gali',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(gedung1);

var gudang = new ol.layer.Tile({
    title: "Gudang",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:gedungs1',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(gudang);


var klinik = new ol.layer.Tile({
    title: "klinik",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:klinikbidan',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(klinik);


var ketam = new ol.layer.Tile({
    title: "Ketam kaye",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:ketam_kaye',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(ketam);

var tambak = new ol.layer.Tile({
    title: "Tambak",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:tambak',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(tambak);

var salbata = new ol.layer.Tile({
    title: "salbata",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:salbata',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(salbata);

var ruko = new ol.layer.Tile({
    title: "Ruko",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:ruko',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(ruko);

var kuburan = new ol.layer.Tile({
    title: "kuburan",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:kuburan',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(kuburan);

var batasdayah = new ol.layer.Tile({
    title: "batas dayah",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:batas_dayah',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(batasdayah);

var batasmenasah = new ol.layer.Tile({
    title: "batas meunasah",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:batas_meunasah',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(batasmenasah);

var bilek = new ol.layer.Tile({
    title: "bilek",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:bilek',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(bilek);


var gedung2 = new ol.layer.Tile({
    title: "Gedung 2",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:gedungs2',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(gedung2);

var halte = new ol.layer.Tile({
    title: "halte",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:halte',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(halte);

var kamarmandi = new ol.layer.Tile({
    title: "kamar mandi",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:kamar_mandi',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(kamarmandi);


var kantordesa = new ol.layer.Tile({
    title: "kantor desa",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:kantor desa',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(kantordesa);


var kantins = new ol.layer.Tile({
    title: "kantins",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:kantins',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(kantins);


var koprasi = new ol.layer.Tile({
    title: "koprasi",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:koprasi',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(koprasi);

var lampohsawet = new ol.layer.Tile({
    title: "Lampoh Sawet",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:lampoh_sawet',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(lampohsawet);

var lapangan = new ol.layer.Tile({
    title: "lapangan bola",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:lapanganbola',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(lapangan);


var menasah = new ol.layer.Tile({
    title: "meunasah",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:meunasah',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(menasah);


var tempatwudhu = new ol.layer.Tile({
    title: "tempat wudhu",
    source: new ol.source.TileWMS({
        url: 'http://8.215.28.229:8080/geoserver/Rahmat/wms',
        params: {
            'LAYERS': 'Rahmat:tempatwudhu',
            'TILED': true
        },
        serverType: 'geoserver',
        visible: true
    })
});

map.addLayer(tempatwudhu);







var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);