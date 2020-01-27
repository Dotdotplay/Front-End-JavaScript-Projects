navigator.geolocation.getCurrentPosition(function(position) {
    getLocation(position.coords.latitude, position.coords.longitude);
});

function getLocation (latitude,longitude) {
        console.log(latitude + " " + longitude);
        let request = new XMLHttpRequest();
        let data;
        let reqString = 'https://fcc-weather-api.glitch.me/api/current?lat='+ latitude +'&'+ 'lon='+ longitude;
        request.open('GET', reqString);
        request.onload =  function () {
            data = JSON.parse(request.responseText);
            let tempNum = data.main.temp; // gets temp
            let iconlink = data.weather[0].icon; //get icon 
            document.getElementById('temp-num').innerHTML = tempNum; 
            document.getElementById('weather-picture').src = iconlink;
}
    request.send();
}
