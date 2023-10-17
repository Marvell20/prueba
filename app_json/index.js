const data = await fetch('./data.json')
    .then(response => response.json())

const jsonList = document.getElementById("json-list");

data.forEach(item => {
    const row = document.createElement("tr");
    const cellNombre = document.createElement("td");
    const cellEdad = document.createElement("td");
    const cellEmail = document.createElement("td");
    const cellTelefonos = document.createElement("td");

    cellNombre.textContent = item.nombre;
    cellEdad.textContent = item.edad;

    cellEmail.textContent = item.email;

    const ulTelefonos = document.createElement("ul");
    item.telefonos.forEach(telefono => {
        const liTelefono = document.createElement("li");
        liTelefono.textContent = `${telefono.tipoTelefono}: ${telefono.numeroTelefono}`;
        ulTelefonos.appendChild(liTelefono);
    });
    cellTelefonos.appendChild(ulTelefonos);

    row.appendChild(cellNombre);
    row.appendChild(cellEdad);
    row.appendChild(cellEmail);
    row.appendChild(cellTelefonos);

    document.getElementById("json-list").appendChild(row);
});