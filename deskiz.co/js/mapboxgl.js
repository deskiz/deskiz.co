
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVza2l6IiwiYSI6ImNsbm16ZGgzaTAxMW0yaXAxdmxxMzAweG8ifQ.czrryP02vvmNZGHTF3GFOw';
     const map = new mapboxgl.Map({
        container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [4.84, 45.748464], // starting position [lng, lat]
     zoom: 15, // starting zoom
       });