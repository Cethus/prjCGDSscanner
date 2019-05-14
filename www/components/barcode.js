/* Arquivo Secundário de configuração para o aplicativo
   Arquivo: este arquivo tem conexão com o arquivo app.js, portanto o mesmo citado é fundamental para o funcionamento do aplicativo */

// Função para ativar o scaner de código de barras
function scanBarcode() {

  // Escaneando...
  window.plugins.barcodeScanner.scan( function(result) {

    var produto; //Variável que irá informar qual produto será exibido
    console.log(result.text);

    if (result.cancelled == true){
      navigator.vibrate(500);
      navigator.notification.alert('Operação cancelada!', null , 'Atenção');
      }
    else{

      // Verificando qual o resultado obtido
      if (result.text == "280720550"){
        produto = "ipad";

        setTimeout(RolarPagina, 1000, produto);
      }
      else if (result.text == "989895555"){
        produto = "j8";

        setTimeout(RolarPagina, 1000, produto);
      }
      else if (result.text == "85236987"){
        produto = "moto";

        setTimeout(RolarPagina, 1000, produto);
      }
      else if (result.text == "85369877444"){
        produto = null;

        setTimeout(RolarPagina, 1000, produto);
      }
      else{
        navigator.vibrate([100, 350, 100]);
        navigator.notification.beep(1);

        navigator.notification.alert('Código de barra inválido!', null, 'Erro!');
      }
    }
  }, 
  function(error) {
    navigator.notification.beep(1);
    navigator.notification.alert("Erro ao Escanear: " + error);
  });
}