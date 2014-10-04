$(document).ready(function() {
    document.getElementById("container").style.width = window.innerWidth + "px";
    var geocoder;
    var address, cityName;
    initialize();

    window.onload = function(){
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(handleGetCurrentPosition, onError);
    };

    function handleGetCurrentPosition(location){

        var lat = location.coords.latitude;
        var longi = location.coords.longitude;
        console.log('lat', lat);
        console.log('long', longi);
        codeLatLng(lat, longi);
    }
    function onError(){}

    function initialize() {
        geocoder = new google.maps.Geocoder();
      }

    function codeLatLng(lat, lng) {

        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({'latLng': latlng}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
          console.log(results);
            if (results[1]) {
             //formatted address
            address = (results[1].formatted_address);
            //find country name
                 for (var i=0; i<results[0].address_components.length; i++) {
                for (var b=0;b<results[0].address_components[i].types.length;b++) {

                //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                    if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                        //this is the object you are looking for
                        city= results[0].address_components[i];
                        break;
                    }
                }
            }
            //city data
            cityName = (city.short_name + " " + city.long_name);

            } else {
              alert("No results found");
            }
          } else {
            alert("Geocoder failed due to: " + status);
          }
        });
    }

    var counter = 2;

    $('#submit').click(function() {
        if (counter>20){
            alert('You can only have 20 to-do\'s at a time');
            return false;
        }
        var input_val = $('#todo-form-add').val();
        var new_bullet_point = $(document.createElement('li'))
            .html(input_val + '  (' + address.substring(0, address.length - 10) + ')' +
                  ' <button type="button" class="todo-list'+
                  '-remove">remove</button>').hide();
        new_bullet_point.appendTo('.todo-list').slideDown('slow');
        $('#todo-form-add').val('');
        counter++;
        return false;
    });
    $('.todo-list-remove').click(function(){
        $(this).parent().hide('slow', function(){$(this).remove();});
    });
});

