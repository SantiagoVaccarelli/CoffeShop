$.get( "http://api.openweathermap.org/data/2.5/weather?q=buenos+aires&APPID=7387efc3f2b32833225b06cb0e56c2b8", function( data ) {
    let clima = Math.round((data.main.temp - 273)*10)/10;
    $(".grados").html(`La temperatura en Buenos Aires es de ${clima} °C, el día esta para un cafe ${clima<24?"caliente":"frío"}`);
});