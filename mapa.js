$(function(){
$("#map_canvas").gmap3({
    marker:{
      address: "plaza altabrisa, merida"
    },
    map:{
      options:{
        zoom: 18,
      }
    }
  });

$("#llegar").click(function(event) {
$("#llegar2").toggle(400);

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
            center: "plaza altabrisa, merida"
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

});
