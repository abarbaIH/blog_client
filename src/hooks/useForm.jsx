import { useState } from "react"

const useForm = (initObject = {}) => {
    const [course, setCourse] = useState(initObject)

    // cons esta fución, sustituimos lo de la linea 24 y así la podemos reutilizar  recibe por parámetro el objeto e.target del formulario
    const serializeForm = (formContent) => {

        // con esto saco los valores del formulario en nuevo objeto
        const formData = new FormData(formContent)
        const completeFormData = {}
        // con esto recorro todo formData y me saco un array con el name y el value de cada campo y se lo asigno al nuevo objeto  completeFormData
        for (let [name, value] of formData) {
            completeFormData[name] = value
        }

        return completeFormData
    }

    const createCourse = e => {
        e.preventDefault()

        const newCourse = serializeForm(e.target)
        setCourse(newCourse)

        document.querySelector(".course-object").classList.add("form-sended") // esto simplemente añade la clase form-sended a la info del pre del curso cuando se ha enviado el curso
    }

    //esta función nos va a permitir realizar cambios a tiempo real
    const modifyCourse = ({ target }) => {// destructuramos el objeto e.target en entrada y podemos sacar su propiedad name y value
        const { name, value } = target
        setCourse({
            ...course, //expandimos lo que ya tubiera el course para no sobreescribir
            [name]: value // le añadimos al campo seleccionado con el onchange, su nuevo valor, de
        })
        console.log(`el campo: ${name} tiene un valor: ${value}`)

    }

    // retornamos el objeto course y  los dos método principales. El serializeForm no nos hace falta, solo se usa aquí
    return {
        course,
        createCourse,
        modifyCourse

    }
}

export default useForm;