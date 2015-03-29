$(function(){
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
        destination:"plaza altabrisa, merida",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    },
    callback: function(results){
     
      if (!results)return;
      $(this).gmap3({
        map:{
          options:{
            zoom: 15,  
            center: "merida"
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
  }
            });
      }
    }
  }


 
  //Inicia el trazado de ruta
 
});
});
