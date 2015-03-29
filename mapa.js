$(function(){
$("#centro").toggle(400);
$("#map_canvas").toggle("slide",400);
$("#map_canvas").toggle("slide",400);
$("#map_canvas").gmap3({
    marker:{
      address: "plaza altabrisa, merida"
    },
    map:{
      options:{
        zoom: 18
      }
    }
  });

$("#llegar").click(function(event) {
$("#centro").toggle(400);
$("#map_canvas").toggle("slide",500);
$("#map_canvas").toggle("slide",500);

$("#llegar2").toggle(400);
setTimeout(function(){
  $('#test').gmap3({
    clear: {
      name:["marker"],
      last: true
    }
  });
}, 2000);
var pos;
$("#map_canvas").gmap3(
{

  getgeoloc:{
    callback : function(latLng){
      if (latLng){
        
        pos=latLng;

        $(this).gmap3({
          getroute:{
   options:{
        origin: pos,
        destination:"plaza altabrisa, merida",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    },
    callback: function(results){
     
      if (!results)return;
      $(this).gmap3({
        map:{
          options:{
            zoom: 19,  
            center: "merida"
          }
        },
        directionsrenderer:{
          options:{
            directions:results
          } 
        }
      });
    }
  }
            });
      }
    }
  }


 
  //Inicia el trazado de ruta
 
});
});
$("#regresar").click(function(event) {
  /* Act on the event */
  $("#map_canvas").toggle("slide",500);
$("#map_canvas").show("slide",500);
$("#centro").toggle(400);
$("#llegar2").toggle(400);

  $("#map_canvas").gmap3({
    marker:{
      address: "plaza altabrisa, merida"
    },
    map:{
      options:{
        zoom: 14
      }
    }
  });
});
});
