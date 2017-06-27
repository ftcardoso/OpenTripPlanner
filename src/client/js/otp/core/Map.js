/*var markers_measures = {};

// if (document.body.clientWidth <= 767) {
//   var isCollapsed = false;
// } else {
//   var isCollapsed = false;
// }

var measurand_parameters = ['Carbon Monoxide', 'Nitrogen Monoxide', 'Nitrogen Dioxide', 'Sulfur Dioxide', 'Particle Pollution', 'Relative Humidity', 'Temperature'];
var measurand_parameters_aux = ['CO', 'O3', 'NO2', 'SO2', 'PM10',  'RH', 'T'];
var measurand_parameters_unit = ['PPM', 'PPB', 'PPB', 'PPB', 'µ', '%', 'ºC'];

var grayIcon = L.icon({
    iconUrl: 'assets/img/gray.png',

    iconSize:     [25, 40], // size of the icon
    iconAnchor:   [15, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var greenIcon = L.icon({
    iconUrl: 'assets/img/green.png',

    iconSize:     [25, 40], // size of the icon
    iconAnchor:   [15, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var yellowIcon = L.icon({
    iconUrl: 'assets/img/yellow.png',

    iconSize:     [25, 40], // size of the icon
    iconAnchor:   [15, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var orangeIcon = L.icon({
    iconUrl: 'assets/img/orange.png',

    iconSize:     [25, 40], // size of the icon
    iconAnchor:   [15, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'assets/img/red.png',

    iconSize:     [25, 40], // size of the icon
    iconAnchor:   [15, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var purpleIcon = L.icon({
    iconUrl: 'assets/img/purple.png',

    iconSize:     [25, 40], // size of the icon
    iconAnchor:   [15, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var brownIcon = L.icon({
    iconUrl: 'assets/img/brown.png',

    iconSize:     [25, 40], // size of the icon
    iconAnchor:   [15, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

CO_RANGE = [0, 4.5, 9.5, 12.5, 15.5, 30.5, 40.5, 50.5]
CO_AQI = [0, 50, 100, 150, 200, 300, 400, 500]
CO_COLORS = ['#009966', '#ffde33', '#ff9933', '#cc0033', '#660099', '#7e0023', '#7e0023']
CO_MARKERS_COLORS = [greenIcon, yellowIcon, orangeIcon, redIcon, purpleIcon, brownIcon, brownIcon]
CO_AIR_LEVEL = ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Hazardous']

NO2_RANGE = [0, 0.054, 0.101, 0.361, 0.65, 1.25, 1.65, 2.049]
NO2_AQI = [0, 50, 100, 150, 200, 300, 400, 500]
NO2_COLORS = ['#009966', '#ffde33', '#ff9933', '#cc0033', '#660099', '#7e0023', '#7e0023']
NO2_MARKERS_COLORS = [greenIcon, yellowIcon, orangeIcon, redIcon, purpleIcon, brownIcon, brownIcon]
NO2_AIR_LEVEL = ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Hazardous']

SO2_RANGE = [0, 36, 76, 186, 304]
SO2_AQI = [0, 50, 100, 150, 200]
SO2_COLORS = ['#009966', '#ffde33', '#ff9933', '#cc0033']
SO2_MARKERS_COLORS = [greenIcon, yellowIcon, orangeIcon, redIcon]
SO2_AIR_LEVEL = ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy']

O3_RANGE = [0, 0.125, 0.165, 0.205, 0.405, 0.505, 0.605]
O3_AQI = [0, 100, 150, 200, 300, 400, 500]
O3_COLORS = ['#aaaaaa', '#ff9933', '#cc0033', '#660099', '#7e0023', '#7e0023']
O3_MARKERS_COLORS = [grayIcon, orangeIcon, redIcon, purpleIcon, brownIcon, brownIcon]
O3_AIR_LEVEL = ['Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Hazardous']

PM10_RANGE = [0, 55, 155, 255, 355, 425, 505, 605]
PM10_AQI = [0, 50, 100, 150, 200, 300, 400, 500]
PM10_COLORS = ['#009966', '#ffde33', '#ff9933', '#cc0033', '#660099', '#7e0023', '#7e0023']
PM10_MARKERS_COLORS = [greenIcon, yellowIcon, orangeIcon, redIcon, purpleIcon, brownIcon, brownIcon]
PM10_AIR_LEVEL = ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Hazardous']

MEANING = ['Air quality is considered satisfactory, and air pollution poses little or no risk.', 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
'Members of sensitive groups may experience health effects. The general public is not likely to be affected.', 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
'Health alert: everyone may experience more serious health effects.', 'Health warnings of emergency conditions. The entire population is more likely to be affected.', 'Health warnings of emergency conditions. The entire population is more likely to be affected.']


POLLUTANTS = {	'CO': [CO_RANGE, CO_AQI, CO_COLORS, CO_MARKERS_COLORS, CO_AIR_LEVEL, MEANING],
				'O3': [O3_RANGE, O3_AQI, O3_COLORS, O3_MARKERS_COLORS, O3_AIR_LEVEL, MEANING], 
				'NO2': [NO2_RANGE, NO2_AQI, NO2_COLORS, NO2_MARKERS_COLORS, NO2_AIR_LEVEL, MEANING], 
				'SO2':[SO2_RANGE, SO2_AQI, SO2_COLORS, SO2_MARKERS_COLORS, SO2_AIR_LEVEL, MEANING],
				'PM10':[PM10_RANGE, PM10_AQI, PM10_COLORS, PM10_MARKERS_COLORS, PM10_AIR_LEVEL, MEANING]
}

/* This program is free software: you can redistribute it and/or
   modify it under the teMap.jsrms of the GNU Lesser General Public License
   as published by the Free Software Foundation, either version 3 of
   the License, or (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/
otp.namespace("otp.core");

otp.core.Map = otp.Class({

    webapp          : null,

    lmap            : null,
    layerControl    : null,
    
    contextMenu             : null,
    contextMenuModuleItems  : null,
    contextMenuLatLng       : null,
    
    baseLayers  : {},
    
    initialize : function(webapp) {
        var this_ = this;
        this.webapp = webapp;
                        
        //var baseLayers = {};
        var defaultBaseLayer = null;
        
        var markerClusters = new L.MarkerClusterGroup({
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: true,
            zoomToBoundsOnClick: true,
            disableClusteringAtZoom: 16,
            animateAddingMarkers: true,
            polygonOptions: {
                weight: 3,
                color: '#48B9C9',
            },
            activated: true,
        });
        

        for(var i=0; i<otp.config.baseLayers.length; i++) { //otp.config.baseLayers.length-1; i >= 0; i--) {
            var layerConfig = otp.config.baseLayers[i];

            var layerProps = { };
            if(layerConfig.attribution) layerProps['attribution'] = layerConfig.attribution;
            if(layerConfig.subdomains) layerProps['subdomains'] = layerConfig.subdomains;

            var layer = new L.TileLayer(layerConfig.tileUrl, layerProps);

	        this.baseLayers[layerConfig.name] = layer;
            if(i == 0) defaultBaseLayer = layer;            
	        
	        if(typeof layerConfig.getTileUrl != 'undefined') {
        	    layer.getTileUrl = otp.config.getTileUrl;
            }
        }
        

        var mapProps = { 
            layers  : [ defaultBaseLayer, markerClusters],
            center : (otp.config.initLatLng || new L.LatLng(0,0)),
            zoom : (otp.config.initZoom || 2),
            zoomControl : false
        }

        if(otp.config.minZoom) mapProps['minZoom'] = otp.config.minZoom;  //_.extend(mapProps, { minZoom : otp.config.minZoom });
        if(otp.config.maxZoom) mapProps['maxZoom'] = otp.config.maxZoom; //_.extend(mapProps, { maxZoom : otp.config.maxZoom });

        this.lmap = new L.Map('map', mapProps);
        
        var lmap = this.lmap

        this.layer_control = L.control.layers(this.baseLayers).addTo(this.lmap);
        L.control.zoom({ position : 'topright' }).addTo(this.lmap);

        var lcontrol = this.layer_control

        var environment = new otp.smartsdk.Env(markerClusters)
        var url = "http://waste.urbiotica.citibrain.com:8002/"
        console.log("HEYO")
        
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            cache: false,
            success: function (data) {
                console.log("Parsing data")
                console.log(data)
                environment.parseData(data);
                console.log(markerClusters.getLayers().length)
                console.log(lmap)
            },
            error: function (error) {
                alert("Impossible to get Initial data");
            }
        })
        
        this.lmap.on('click', function (e) {
            var measures_div = document.getElementById('over_map');
            var air_concerns = document.getElementById('health');
            measures_div.style.display = 'none';
            air_concerns.style.display = 'none';

            var aqi_tables = document.getElementsByClassName('aqi_table');	

            for (var j = 0; j < aqi_tables.length; j++) { 
                aqi_tables[j].style.display = 'none';
            }
        });

        
        var client = mqtt.connect("http://163.172.148.102:8000/resources/airquality");
        client.subscribe('airquality');
        client.on('message', function (topic, message) {
            var content = JSON.parse(message).data;
            console.log("Subscribed MQTT")
            environment.parseData(content);
        });

        console.log(markerClusters.getLayers().length)

        //this.lmap.addControl(new L.Control.Zoom({ position : 'topright' }));
       
        //Adds debug inspector layers overlay to layers control
        //It gets all the layers from inspector layers API
        //debug layers can be enabled in config.js or as URL query:
        //?debug_layers=true
        if (otp.config.debug_layers === true) {
            var url = otp.config.hostname + '/' + otp.config.restService + '/inspector/layers';
            $.ajax(url, {
                dataType: 'JSON',
                success: function(data) {
                    var layers = {};
                    data.layers.map(function(layer) {
                        this.layer_control.addOverlay(new L.TileLayer(
                            otp.config.hostname + '/' + otp.config.restService + '/inspector/tile/' + layer.key + '/{z}/{x}/{y}.png',
                            { maxZoom : 22}), layer.name);
                    }, this_);

                }
            });
        }

        
      
        if(!otp.config.initLatLng) {
            var url = otp.config.hostname + '/' + otp.config.restService;
            $.ajax(url, {
                data: { routerId : otp.config.routerId },            
                dataType: 'JSON',
                success: function(data) {
                    this_.lmap.fitBounds([
                        [data.lowerLeftLatitude, data.lowerLeftLongitude],
                        [data.upperRightLatitude, data.upperRightLongitude]
                    ]);
                }
            });
        }
       

        /*var baseMaps = {
            'Base Layer' : tileLayer 
        };*/
        
        var overlays = { };
        
        if(typeof otp.config.overlayTileUrl != 'undefined') {
	    	var overlayTileLayer = new L.TileLayer(otp.config.overlayTileUrl);
	    	//this.lmap.addLayer(overlayTileLayer);
	    	//overlays['Overlay'] = overlayTileLayer;
        }
        
        //this.layerControl = new L.Control.Layers(baseMaps, overlays);
        //this.layerControl.addTo(this.lmap);
        
        this.lmap.on('click', function(event) {
            webapp.mapClicked(event);        
        });

        this.lmap.on('viewreset', function(event) {
            webapp.mapBoundsChanged(event);        
        });

        this.lmap.on('dragend', function(event) {
            webapp.mapBoundsChanged(event);        
        });
        
        // setup context menu
        var this_ = this;
        
        this.contextMenu = new otp.core.MapContextMenu(this);
      
        this.activated = true;        
    },
    
    addContextMenuItem : function(text, clickHandler) {
        this.contextMenu.addModuleItem(text, clickHandler);
    },
    
    activeModuleChanged : function(oldModule, newModule) {
        
        //console.log("actModChanged: "+oldModule+", "+newModule);
        
        // hide module-specific layers for "old" module, if applicable
        if(oldModule != null) {
            for(var layerName in oldModule.mapLayers) {
                
                var layer = oldModule.mapLayers[layerName];
                this.lmap.removeLayer(layer);                
                //this.layerControl.removeLayer(layer);
            }
        }

        // show module-specific layers for "new" module
        for(var layerName in newModule.mapLayers) {
            var layer = newModule.mapLayers[layerName];
            this.lmap.addLayer(layer);
            var this_ = this;
        }
        
        // change default BaseLayer, if specified
        if(newModule.defaultBaseLayer) {
            for(layerName in this.baseLayers) {
                var baseLayer = this.baseLayers[layerName];
                if(layerName == newModule.defaultBaseLayer)
                    this.lmap.addLayer(baseLayer, true);
                else 
                    this.lmap.removeLayer(baseLayer);
            }
        }
        
        // refresh the map context menu
        this.contextMenu.clearModuleItems();
        newModule.addMapContextMenuItems();
    },
    
    setBounds : function(bounds)
    {
    	this.lmap.fitBounds(bounds);
    },
    
    $ : function() {
        return $("#map");
    },

    CLASS_NAME : "otp.core.Map"
});
