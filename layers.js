var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_carte__de_la_region_des_montagnes__1 = new ol.format.GeoJSON();
var features_carte__de_la_region_des_montagnes__1 = format_carte__de_la_region_des_montagnes__1.readFeatures(json_carte__de_la_region_des_montagnes__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carte__de_la_region_des_montagnes__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carte__de_la_region_des_montagnes__1.addFeatures(features_carte__de_la_region_des_montagnes__1);
var lyr_carte__de_la_region_des_montagnes__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carte__de_la_region_des_montagnes__1, 
                style: style_carte__de_la_region_des_montagnes__1,
                popuplayertitle: 'carte__de_la_region_des_montagnes_',
                interactive: true,
                title: '<img src="styles/legend/carte__de_la_region_des_montagnes__1.png" /> carte__de_la_region_des_montagnes_'
            });
var format_voie1_2 = new ol.format.GeoJSON();
var features_voie1_2 = format_voie1_2.readFeatures(json_voie1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voie1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voie1_2.addFeatures(features_voie1_2);
var lyr_voie1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_voie1_2, 
                style: style_voie1_2,
                popuplayertitle: 'voie1',
                interactive: true,
                title: '<img src="styles/legend/voie1_2.png" /> voie1'
            });
var format_voie_3 = new ol.format.GeoJSON();
var features_voie_3 = format_voie_3.readFeatures(json_voie_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voie_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voie_3.addFeatures(features_voie_3);
var lyr_voie_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_voie_3, 
                style: style_voie_3,
                popuplayertitle: 'voie',
                interactive: true,
                title: '<img src="styles/legend/voie_3.png" /> voie'
            });
var format_localites_TONKPI_4 = new ol.format.GeoJSON();
var features_localites_TONKPI_4 = format_localites_TONKPI_4.readFeatures(json_localites_TONKPI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localites_TONKPI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localites_TONKPI_4.addFeatures(features_localites_TONKPI_4);
var lyr_localites_TONKPI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localites_TONKPI_4, 
                style: style_localites_TONKPI_4,
                popuplayertitle: 'localites_TONKPI',
                interactive: true,
                title: '<img src="styles/legend/localites_TONKPI_4.png" /> localites_TONKPI'
            });
var format_Emprise_voie1_5 = new ol.format.GeoJSON();
var features_Emprise_voie1_5 = format_Emprise_voie1_5.readFeatures(json_Emprise_voie1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emprise_voie1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emprise_voie1_5.addFeatures(features_Emprise_voie1_5);
var lyr_Emprise_voie1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emprise_voie1_5, 
                style: style_Emprise_voie1_5,
                popuplayertitle: 'Emprise_voie1',
                interactive: true,
                title: '<img src="styles/legend/Emprise_voie1_5.png" /> Emprise_voie1'
            });
var format_localites_CAVALLY_6 = new ol.format.GeoJSON();
var features_localites_CAVALLY_6 = format_localites_CAVALLY_6.readFeatures(json_localites_CAVALLY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localites_CAVALLY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localites_CAVALLY_6.addFeatures(features_localites_CAVALLY_6);
var lyr_localites_CAVALLY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localites_CAVALLY_6, 
                style: style_localites_CAVALLY_6,
                popuplayertitle: 'localites_CAVALLY',
                interactive: true,
                title: '<img src="styles/legend/localites_CAVALLY_6.png" /> localites_CAVALLY'
            });
var format_Emprise_voie1_7 = new ol.format.GeoJSON();
var features_Emprise_voie1_7 = format_Emprise_voie1_7.readFeatures(json_Emprise_voie1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emprise_voie1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emprise_voie1_7.addFeatures(features_Emprise_voie1_7);
var lyr_Emprise_voie1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emprise_voie1_7, 
                style: style_Emprise_voie1_7,
                popuplayertitle: 'Emprise_voie1',
                interactive: true,
                title: '<img src="styles/legend/Emprise_voie1_7.png" /> Emprise_voie1'
            });
var format_localites_GUEMON_8 = new ol.format.GeoJSON();
var features_localites_GUEMON_8 = format_localites_GUEMON_8.readFeatures(json_localites_GUEMON_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localites_GUEMON_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localites_GUEMON_8.addFeatures(features_localites_GUEMON_8);
var lyr_localites_GUEMON_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localites_GUEMON_8, 
                style: style_localites_GUEMON_8,
                popuplayertitle: 'localites_GUEMON',
                interactive: true,
                title: '<img src="styles/legend/localites_GUEMON_8.png" /> localites_GUEMON'
            });
var format_Emprise_voie_9 = new ol.format.GeoJSON();
var features_Emprise_voie_9 = format_Emprise_voie_9.readFeatures(json_Emprise_voie_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emprise_voie_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emprise_voie_9.addFeatures(features_Emprise_voie_9);
var lyr_Emprise_voie_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emprise_voie_9, 
                style: style_Emprise_voie_9,
                popuplayertitle: 'Emprise_voie',
                interactive: true,
                title: '<img src="styles/legend/Emprise_voie_9.png" /> Emprise_voie'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_carte__de_la_region_des_montagnes__1.setVisible(true);lyr_voie1_2.setVisible(true);lyr_voie_3.setVisible(true);lyr_localites_TONKPI_4.setVisible(true);lyr_Emprise_voie1_5.setVisible(true);lyr_localites_CAVALLY_6.setVisible(true);lyr_Emprise_voie1_7.setVisible(true);lyr_localites_GUEMON_8.setVisible(true);lyr_Emprise_voie_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_carte__de_la_region_des_montagnes__1,lyr_voie1_2,lyr_voie_3,lyr_localites_TONKPI_4,lyr_Emprise_voie1_5,lyr_localites_CAVALLY_6,lyr_Emprise_voie1_7,lyr_localites_GUEMON_8,lyr_Emprise_voie_9];
lyr_carte__de_la_region_des_montagnes__1.set('fieldAliases', {'id': 'id', 'Districts': 'Districts', 'Region': 'Region', 'Departement': 'Departement', 'Sous Prefecture': 'Sous Prefecture', 'Localites': 'Localites', 'type de pop_': 'type de pop_', 'type_localite': 'type_localite', 'Population': 'Population', 'Année': 'Année', 'exposant pour tca': 'exposant pour tca', 'Taux d\'Accrois_ Nat.': 'Taux d\'Accrois_ Nat.', 'Population estimée': 'Population estimée', 'asciiname': 'asciiname', 'alternatenames': 'alternatenames', 'Pop': 'Pop', });
lyr_voie1_2.set('fieldAliases', {'id': 'id', 'acr1': 'acr1', 'observatio': 'observatio', 'score': 'score', });
lyr_voie_3.set('fieldAliases', {'id': 'id', 'axe': 'axe', 'observatio': 'observatio', 'score': 'score', });
lyr_localites_TONKPI_4.set('fieldAliases', {'id': 'id', 'Districts': 'Districts', 'Region': 'Region', 'Departement': 'Departement', 'Sous Prefecture': 'Sous Prefecture', 'Localites': 'Localites', 'type de pop_': 'type de pop_', 'type_localite': 'type_localite', 'Population': 'Population', 'Année': 'Année', 'exposant pour tca': 'exposant pour tca', 'Taux d\'Accrois_ Nat.': 'Taux d\'Accrois_ Nat.', 'Population estimée': 'Population estimée', 'asciiname': 'asciiname', 'alternatenames': 'alternatenames', 'Pop': 'Pop', });
lyr_Emprise_voie1_5.set('fieldAliases', {});
lyr_localites_CAVALLY_6.set('fieldAliases', {'id': 'id', 'Districts': 'Districts', 'Region': 'Region', 'Departement': 'Departement', 'Sous Prefecture': 'Sous Prefecture', 'Localites': 'Localites', 'type de pop_': 'type de pop_', 'type_localite': 'type_localite', 'Population': 'Population', 'Année': 'Année', 'exposant pour tca': 'exposant pour tca', 'Taux d\'Accrois_ Nat.': 'Taux d\'Accrois_ Nat.', 'Population estimée': 'Population estimée', 'asciiname': 'asciiname', 'alternatenames': 'alternatenames', 'Pop': 'Pop', });
lyr_Emprise_voie1_7.set('fieldAliases', {});
lyr_localites_GUEMON_8.set('fieldAliases', {'id': 'id', 'Districts': 'Districts', 'Region': 'Region', 'Departement': 'Departement', 'Sous Prefecture': 'Sous Prefecture', 'Localites': 'Localites', 'type de pop_': 'type de pop_', 'type_localite': 'type_localite', 'Population': 'Population', 'Année': 'Année', 'exposant pour tca': 'exposant pour tca', 'Taux d\'Accrois_ Nat.': 'Taux d\'Accrois_ Nat.', 'Population estimée': 'Population estimée', 'asciiname': 'asciiname', 'alternatenames': 'alternatenames', 'Pop': 'Pop', });
lyr_Emprise_voie_9.set('fieldAliases', {});
lyr_carte__de_la_region_des_montagnes__1.set('fieldImages', {'id': '', 'Districts': '', 'Region': '', 'Departement': '', 'Sous Prefecture': '', 'Localites': '', 'type de pop_': '', 'type_localite': '', 'Population': '', 'Année': '', 'exposant pour tca': '', 'Taux d\'Accrois_ Nat.': '', 'Population estimée': '', 'asciiname': '', 'alternatenames': '', 'Pop': '', });
lyr_voie1_2.set('fieldImages', {'id': '', 'acr1': '', 'observatio': '', 'score': '', });
lyr_voie_3.set('fieldImages', {'id': '', 'axe': '', 'observatio': '', 'score': '', });
lyr_localites_TONKPI_4.set('fieldImages', {'id': '', 'Districts': '', 'Region': '', 'Departement': '', 'Sous Prefecture': '', 'Localites': '', 'type de pop_': '', 'type_localite': '', 'Population': '', 'Année': '', 'exposant pour tca': '', 'Taux d\'Accrois_ Nat.': '', 'Population estimée': '', 'asciiname': '', 'alternatenames': '', 'Pop': '', });
lyr_Emprise_voie1_5.set('fieldImages', {});
lyr_localites_CAVALLY_6.set('fieldImages', {'id': '', 'Districts': '', 'Region': '', 'Departement': '', 'Sous Prefecture': '', 'Localites': '', 'type de pop_': '', 'type_localite': '', 'Population': '', 'Année': '', 'exposant pour tca': '', 'Taux d\'Accrois_ Nat.': '', 'Population estimée': '', 'asciiname': '', 'alternatenames': '', 'Pop': '', });
lyr_Emprise_voie1_7.set('fieldImages', {});
lyr_localites_GUEMON_8.set('fieldImages', {'id': '', 'Districts': '', 'Region': '', 'Departement': '', 'Sous Prefecture': '', 'Localites': '', 'type de pop_': '', 'type_localite': '', 'Population': '', 'Année': '', 'exposant pour tca': '', 'Taux d\'Accrois_ Nat.': '', 'Population estimée': '', 'asciiname': '', 'alternatenames': '', 'Pop': '', });
lyr_Emprise_voie_9.set('fieldImages', {});
lyr_carte__de_la_region_des_montagnes__1.set('fieldLabels', {'id': 'no label', 'Districts': 'no label', 'Region': 'no label', 'Departement': 'no label', 'Sous Prefecture': 'no label', 'Localites': 'no label', 'type de pop_': 'no label', 'type_localite': 'no label', 'Population': 'no label', 'Année': 'no label', 'exposant pour tca': 'no label', 'Taux d\'Accrois_ Nat.': 'no label', 'Population estimée': 'no label', 'asciiname': 'no label', 'alternatenames': 'no label', 'Pop': 'no label', });
lyr_voie1_2.set('fieldLabels', {'id': 'no label', 'acr1': 'no label', 'observatio': 'no label', 'score': 'no label', });
lyr_voie_3.set('fieldLabels', {'id': 'no label', 'axe': 'no label', 'observatio': 'no label', 'score': 'no label', });
lyr_localites_TONKPI_4.set('fieldLabels', {'id': 'no label', 'Districts': 'no label', 'Region': 'no label', 'Departement': 'no label', 'Sous Prefecture': 'no label', 'Localites': 'no label', 'type de pop_': 'no label', 'type_localite': 'no label', 'Population': 'no label', 'Année': 'no label', 'exposant pour tca': 'no label', 'Taux d\'Accrois_ Nat.': 'no label', 'Population estimée': 'no label', 'asciiname': 'no label', 'alternatenames': 'no label', 'Pop': 'no label', });
lyr_Emprise_voie1_5.set('fieldLabels', {});
lyr_localites_CAVALLY_6.set('fieldLabels', {'id': 'no label', 'Districts': 'no label', 'Region': 'no label', 'Departement': 'no label', 'Sous Prefecture': 'no label', 'Localites': 'no label', 'type de pop_': 'no label', 'type_localite': 'no label', 'Population': 'no label', 'Année': 'no label', 'exposant pour tca': 'no label', 'Taux d\'Accrois_ Nat.': 'no label', 'Population estimée': 'no label', 'asciiname': 'no label', 'alternatenames': 'no label', 'Pop': 'no label', });
lyr_Emprise_voie1_7.set('fieldLabels', {});
lyr_localites_GUEMON_8.set('fieldLabels', {'id': 'no label', 'Districts': 'no label', 'Region': 'no label', 'Departement': 'no label', 'Sous Prefecture': 'no label', 'Localites': 'no label', 'type de pop_': 'no label', 'type_localite': 'no label', 'Population': 'no label', 'Année': 'no label', 'exposant pour tca': 'no label', 'Taux d\'Accrois_ Nat.': 'no label', 'Population estimée': 'no label', 'asciiname': 'no label', 'alternatenames': 'no label', 'Pop': 'no label', });
lyr_Emprise_voie_9.set('fieldLabels', {});
lyr_Emprise_voie_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});