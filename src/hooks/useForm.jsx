import { useState } from "react"

const useForm = (initObject = {}) => {
    const [articleData, setArticleData] = useState(initObject)

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

    const createArticle = e => {
        e.preventDefault()

        const newArticle = serializeForm(e.target)
        setArticleData(newArticle)

        // document.querySelector(".course-object").classList.add("form-sended") // esto simplemente añade la clase form-sended a la info del pre del curso cuando se ha enviado el curso
    }

    //esta función nos va a permitir realizar cambios a tiempo real
    const modifyArticle = ({ target }) => {// destructuramos el objeto e.target en entrada y podemos sacar su propiedad name y value
        const { name, value } = target
        setArticleData({
            ...articleData, //expandimos lo que ya tubiera el article para no sobreescribir
            [name]: value // le añadimos al campo seleccionado con el onchange, su nuevo valor, de
        })

    }

    // retornamos el objeto article y  los dos método principales. El serializeForm no nos hace falta, solo se usa aquí
    return {
        articleData,
        createArticle,
        modifyArticle

    }
}

export default useForm;