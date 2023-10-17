const urlParams = new URLSearchParams(window.location.search);
const valor1 = urlParams.get('valor1');
const valor2 = urlParams.get('valor2');
const suma = parseFloat(valor1) + parseFloat(valor2);

document.getElementById('sumaResultado').textContent = suma;