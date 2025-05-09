function abrirCarta() {
  const carta = document.getElementById('carta');
  carta.classList.add('abierta');

  const sonido = document.getElementById('sonido');
  sonido.play();
}
