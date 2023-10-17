document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor1 = document.querySelector("input[name='valor1']").value;
    const valor2 = document.querySelector("input[name='valor2']").value;

    window.location.href = `result.html?valor1=${valor1}&valor2=${valor2}`;
});