// Método GET R (read) del CRUD
async function getBookings() { // getUsers hace una peticion a la API  y se la pasa a json para que nos devuelva datos.
    const result = await fetch("http://localhost:3000/bookings") //Hace la petición a la API
    const data = await result.json() //El resutado pásamelo a json, await para que espere xq va a pasar.
    return data //data es un array con distintos usuarios.
}

let sectionTag = document.getElementById("booking-list") // Selecciona mi sección del html por su id.
async function printBookings() {   // pido que me imprima los datos.
    let bookings = await getBookings()  // invocamos a la función anterior para que nos devuelva un array de usuarios.
    bookings.map(booking => {  // con map recorro el array, por cada user(usuario) imprime una etiqueta html, es decir, que imprima los usuarios.
        // Quiere decir que dentro de la etiqueta tag me añada este html que te escribo.
        sectionTag.innerHTML += 
        `<h3>${booking.name}</h3> 
        <p>${booking.phone}</p>
        <p>${booking.email}</p>
        <p>${booking.checkin}</p>
        <p>${booking.checkout}</p>
        <button onclick="deleteBooking('${booking.id}')">Delete</button>`
})
}

// Método DELETE D (delete) del CRUD
async function deleteBooking(id) {
    const result = await fetch(`http://localhost:3000/bookings/${id}`,
    {method: "DELETE"});
    return result
}

// Método POST C (create) del CRUD
async function postBookings() {
    const newBooking = {
        "name": "Laura Hernández",
        "phone": "648596321",
        "email": "laufer@gmail.com",
        "checkin": "05/05/2024",
        "checkout": "15/05/2024"
    }

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBooking),
    };

    const result = await fetch(`http://localhost:3000/bookings`, options)
    return result
}

// Método POST C (CREATE) del CRUD con Formulario.
async function createBookings() {
    const formBooking = document.getElementById("bookings-form")

    const newBooking = {
        "name": formBooking.elements[0].value,
        "phone": formBooking.elements[1].value,
        "email": formBooking.elements[2].value,
        "checkin": formBooking.elements[3].value,
        "checkout": formBooking.elements[4].value
    };

const result = await fetch(`http://localhost:3000/bookings`, {
    method:"POST",
    headers: {
    'Content-Type': 'application/json'},
    body: JSON.stringify(newBooking)
    } )
    return result
}

// Método PUT U (UPDATE) del CRUD.