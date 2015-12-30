define({
  "dataPath": "https://map.freifunk-celle.de/data/",
  "siteName": "Freifunk Celle",
  "mapSigmaScale": 0.5,
  "showContact": true,
  "maxAge": 7,
  "nodeInfos": [
    { "name": "Statistik",
      "href": "https://map.freifunk-celle.de/data/nodes/{NODE_ID}.png",
      "thumbnail": "https://map.freifunk-celle.de/data/nodes/{NODE_ID}.png",
      "caption": "Knoten {NODE_ID}"
    }
  ],
  "mapLayers": [
    { "name": "MapQuest",
      "url": "https://otile{s}-s.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg",
      "config": {
        "subdomains": "1234",
        "type": "osm",
        "attribution": "Tiles &copy; <a href=\"https://www.mapquest.com/\" target=\"_blank\">MapQuest</a>, Data CC-BY-SA OpenStreetMap",
        "maxZoom": 18
      }
    }
  ],
  "globalInfos": [
    { "name": "Wochenstatistik",
      "href": "https://map.freifunk-celle.de/data/nodes/globalGraph.png",
      "thumbnail": "https://map.freifunk-celle.de/data/nodes/globalGraph.png",
      "caption": "Bild mit Wochenstatistik"
    }
  ],
  "siteNames": [
    { "site": "ffce", "name": "Celle" }
  ]
})
