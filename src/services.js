// Método GET R (read) del CRUD
async function getBookings() {
    const result = await fetch("http://localhost:3000/bookings")
    const data = await result.json()
    return data
}

let sectionTag = document.getElementById("booking-list")
async function printBookings() {
    let bookings = await getBookings()
    bookings.map(booking => { 
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