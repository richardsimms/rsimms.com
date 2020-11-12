import React, { useState } from "react"
import "../components/layout.css";

export default function Newsletter() {
  const [formData, setFormData] = useState({})
  const [message, setMessage] = useState("")

  const handleInput = (e) => {
    const copyFormData = { ...formData }
    copyFormData[e.target.name] = e.target.value
    setFormData(copyFormData)
  }

  const sendData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/richardsimms/airtable/TfknTYLIZdcbVDGW?tableName=newsletter",
        {
          method: "post",
          body: JSON.stringify([formData]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const json = await response.json()
      console.log("Success:", JSON.stringify(json))
      setMessage(json.message)
    } catch (error) {
      console.error("Error:", error)
      setMessage("Error")
    }
  }


  
  return (
    <div className="HeroGroup">
      <form
        className="input-form"
        id="contact"
        name="newsletter"
        onSubmit={sendData}
        method="post" 
        action="/success"
        
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <input name="submit" type="submit" value="Send" />
        
        {message}
      </form>
    </div>
  )
}