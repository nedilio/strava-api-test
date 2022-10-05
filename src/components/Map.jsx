import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import polyline from "@mapbox/polyline";

import "./Map.css";

const Map = ({ activityMap, begin, end }) => {
  let track = polyline.decode(activityMap.polyline, 6);
  track = track.map((coordinates) =>
    coordinates.reverse().map((val) => val * 10)
  );
  const geojson = {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: track,
      },
    },
  };

  mapboxgl.accessToken =
    "pk.eyJ1IjoibmVkaWxpbyIsImEiOiJjbDZwZ2l4cjAwMDBtM3FxeWgxdDBvN3RwIn0.VGz7NeTCQgWqe0ek6D6v5Q";
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    begin.reverse();
    console.log("iniciando mapa --------");
    console.log("valor de begin: ", begin);
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: begin,
      zoom: 15,
    });
    setTimeout(() => {
      new mapboxgl.Marker().setLngLat(begin).addTo(map.current);
      new mapboxgl.Marker().setLngLat(end.reverse()).addTo(map.current);
      // map.current.fitBounds(track.getBounds());

      map.current.addSource("route", geojson);
      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 8,
        },
      });
      const bounds = new mapboxgl.LngLatBounds(track[0], track[0]);

      // Extend the 'LngLatBounds' to include every coordinate in the bounds result.
      for (const coord of track) {
        bounds.extend(coord);
      }

      map.current.fitBounds(bounds, {
        padding: 20,
      });
    }, 1000);
  }, []);
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
