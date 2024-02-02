export default function timer(state) {
  let startTime = Date.now();
  if (state === 'START') {
    // Atualiza o cronômetro a cada 100 milissegundos
    const stopwatchInterval = setInterval(function () {
      const elapsedTime = Date.now() - startTime;

      // Converte milissegundos para minutos, segundos e milissegundos
      const minutes = Math.floor(elapsedTime / (1000 * 60));
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
      const milliseconds = elapsedTime % 1000;

      // Formata os valores para exibição (adiciona zeros à esquerda se necessário)
      const formattedTime =
        (minutes < 10 ? '0' : '') +
        minutes +
        ':' +
        (seconds < 10 ? '0' : '') +
        seconds +
        '.' +
        (milliseconds < 100 ? '0' : '') +
        (milliseconds < 10 ? '0' : '') +
        milliseconds;

      result(formattedTime);
    }, 100);
  } else {
    //clearInterval(stopwatchInterval)
  }
}
