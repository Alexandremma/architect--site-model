function initialize() {
    let mapOptions = {
      center: new google.maps.LatLng(-23.425239981492112, -51.93840620369345),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById("maps-canvas"), mapOptions);

    let ponto = new google.maps.LatLng(-23.425239981492112, -51.93840620369345);
    let marker = new google.maps.Marker({
      position: ponto,//seta posição
      map: map,//Objeto mapa
      title:"Hello World!"//string que será exibida quando passar o mouse no marker
      //icon: caminho_da_imagem
    });
}