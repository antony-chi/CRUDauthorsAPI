//vamos a ejecutar nuestra logica
//main es nuestro js principal

const goodReadsCrud = require("./CRUDauthors");

//listar a todos los autores

// goodReadsCrud.getAuthors()

//lista autor por su ID

// goodReadsCrud.getAuthor(14918)

//CREAR UN AUTOR (MANDAR UN JSON)

    // const jsonSEND = {
    //     name: "antony",
    //     last_name: "chi",
    //     nacionalidad: "MX",
    //     biography: "programador",
    //     gender: "M",
    //     age: 20,
    //     is_alive: true
    // }
// goodReadsCrud.createAuthor(jsonSEND)

//PACH AUN AUTOR actualizar un autor ya existente
//     const jsonUpdate = {
//             name: "Nael",
//             last_name: "chi pech",
//             nacionalidad: "MX",
//             biography: "CONTADOR",
//             gender: "m" // con letra minuscula no acepta para los generos esta API
//     }
// goodReadsCrud.patchAuthor(14933, jsonUpdate)


//eliminar autor
goodReadsCrud.deleteAuthor(14934)