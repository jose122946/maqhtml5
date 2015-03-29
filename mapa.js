$(function(){
    var merida = new google.maps.LatLng(20.9807788,-89.6217701);
var pos;
$("#map").gmap3(
{

  getgeoloc:{
    callback : function(latLng){
      if (latLng){
        
        pos=latLng;

        $(this).gmap3({
          getroute:{
   options:{
        origin: pos,
        destination:"McKinney, Texas, Estados Unidos",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    },
    callback: function(results){
     
      if (!results)return;
      $(this).gmap3({
        map:{
          options:{
            zoom: 13,  
            center: [-33.879, 151.235]
          }
        },
        directionsrenderer:{
          container:$(document.createElement("div")).addClass("panel_ruta").insertAfter($("#map")),
          options:{
            directions:results
          } 
        }
      });
    }
  },

          marker:{ 
            latLng:latLng
          }
            });
      }
    }
  }


 
  //Inicia el trazado de ruta
 
});
console.log(latLng);
});
