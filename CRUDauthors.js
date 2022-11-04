//vamos a ejecutar todo nuestra logica
//traer a request el paquete que acabmos de instalar
const request = require("request")

//declarar la URI

const URI = "https://goodreads-devf-aaron.herokuapp.com//api/v1/authors/"

//listar a todos los autores

const getAuthors = () => {
    request.get(URI,(error,response,body) =>{
        //validamos nuestra peticion
        if(response.statusCode == 200){
            const authors = JSON.parse(body)
            console.log(authors)
        }else{
            console.log(response.statusCode, response.statusMessage)
                //mostrara 404 error si no se encuntra la api
        }
    })
}

//LISTAR UN AUTOR POR ID

const getAuthor = (id) => {
        request.get(URI+id+"/", (error,response,body) => {
        //validar  nuestra pedticion
        if(response.statusCode === 200){
            const author = JSON.parse(body)
            console.log(author)
        }else{
            console.log(response.statusCode, response.statusMessage)
                //404       not found
        }
        
    })
}

//CREAR AUTOR - USAMOS UN OBJETO CON DATOS A CREAR Y PARA ELLO NECESITAMOS
//usar un formato JSON

const createAuthor = (jsonData) => {
        const objConfig = {
            url: URI, // es el apartado de crear autor https://goodreads-devf-aaron.herokuapp.com//api/v1/authors/
            form: jsonData // Esta es mi data  en formato JSON
        }

        request.post(objConfig, (error,response,body) => {
            //validamos nuestra peticion
            if(response.statusCode === 201){
                const createAuthor = JSON.parse(body)
                console.log("autor creado con exito: "+ "\n", createAuthor)
            }else{
                console.llog(response.statusCode,response.statusMessage)
                            // 404 NOT FOUND (porqure la ruta esta mal)
                            // 400 BAD REQUEST (no acepta el dato la api)
            }
        }
        )
}


//PARTIAL UPDATE DE UN AUTOR
    const patchAuthor = (id, jsonUPDATE) =>{
        const objConfig = {
            url: URI+id+"/",
            form: jsonUPDATE
        }

        request.patch(objConfig,(error, response, body)=>{
            //validamos NUESTRA PETICION
            if(response.statusCode === 200){
                const patchAuthor = JSON.parse(body)
                console.log("ACTIALIZACION COMPLETA: "+ "\n",patchAuthor) 
            }else{
                console.log("UPS! ALGO SALIO MAL ", response.statusCode, response.statusMessage)
                            //404   NOT FOUND (PORQUE NO SE ENCONTRO LA URL)
                            //400   BAD REQUEST (OPCION NO VALIDAD)
            }
        })
    }

//ELIMINAR AUTOR POR ID
    const deleteAuthor = (id) => {
        request.delete(URI+id+"/", (error, response, body) =>{
            //validamos niestra peticon
            if(response.statusCode === 204){
                console.log("El AUTOR FUE ELIMINADO EXXITOSAMENTE")
            }else{
                console.log(response.statusCode,response.statusMessage)
                            //  404     not found
            }
        })
    }




module.exports = {
    getAuthors,
    getAuthor,
    createAuthor,
    patchAuthor,
    deleteAuthor
}