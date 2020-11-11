import React, { useState } from "react"

export default function Contact() {
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
        "https://v1.nocodeapi.com/richardsimms/airtable/TfknTYLIZdcbVDGW?tableName=contact",
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
      setMessage("Success")
    } catch (error) {
      console.error("Error:", error)
      setMessage("Error")
    }
  }

  return (
    <div className="App">
      <form
        className="input-form"
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
        action="/success"

      >
        <input
          name="name" // name should matched with your airtable table field
          type="text"
          placeholder="Name"
          required
          onChange={handleInput}
        />
        <input
          name="email" // name should matched with your airtable table field
          type="email"
          placeholder="Email"
          required
          onChange={handleInput}
        />
        <textarea
          name="message" // name should matched with your airtable table field
          placeholder="Message"
          onChange={handleInput}
        />
        <input name="submit" type="submit" value="Send" />
        {message}
      </form>
    </div>
  )
}