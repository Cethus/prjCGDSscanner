/* Arquivo inicial de configuração para o aplicativo
   Atenção: este arquivo tem conexão com o arquivo barcode.js, portanto o mesmo citado é fundamental para o funcionamento do aplicativo */

// Page init event
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.matches('#first-page')) {

    page.querySelector('#push-button').onclick = function() {
      scanBarcode();
    };

  }
});

// Função para verificar qual página será mostrada
function RolarPagina(produto){
  if (produto == "ipad"){
    navigator.vibrate(100);
    document.querySelector('#navigator').pushPage('ipad.html');
  }
  else if (produto == "j8"){
    navigator.vibrate(100);
    document.querySelector('#navigator').pushPage('j8.html');
  }
  else if (produto == "moto"){
    navigator.vibrate(100);
    document.querySelector('#navigator').pushPage('moto.html');
  }
  else{
    navigator.vibrate(100);
    document.querySelector('#navigator').pushPage('asus.html');
  }

}