function ativarGeolocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        texto.innerHTML =
          position.coords.latitude + ", " + position.coords.longitude;
      },
      (error) => {
        texto.innerHTML = "Erro ao obter geolocalização: " + error.message;
      },
      { enableHighAccuracy: true },
    );
  }
}