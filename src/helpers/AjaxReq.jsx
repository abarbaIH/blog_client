import { useState, useEffect } from "react"

const AjaxReq = async (url, methodReceived, dataToSave = "") => {
    let loading = true

    let options = {
        method: "GET"
    }

    if (methodReceived === "GET" || methodReceived === "DELETE") {
        options = {
            method: methodReceived
        }
    }

    if (methodReceived === "POST" || methodReceived === "PUT") {
        options = {
            method: methodReceived,
            body: JSON.stringify(dataToSave),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    const request = await fetch(url, options)
    const dataRequest = await request.json()
    loading = false

    return {
        dataRequest,
        loading
    }
}

export default AjaxReq

