import { useState } from "react"

export const CommentBox = ({ lessonId }) => {

    const [chat, update] = useState({
        comment: "",
        userId: 0,
        lessonId:0

    })
  
    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const ticketToSendToApi = {
            userId: userObject.id,
            lessonId:lessonId,
            comment: chat.comment
        }


        // TODO: Perform the fetch() to POST the object to the API
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSendToApi)
        })
        
        .then(response => response.json())
        .then(() => {
         window.alert('We appreciate your feedback!')
        })
        .then(() => {
            // update the chat object to clear the comment field
            update({...chat, comment: ""})
        })
    
    }

    return (
        <form className="chatBox">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Message"></label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Please give us your feedback on this lesson"
                        value={chat.comment}
                        onChange={
                            (evt) => {
                                const copy = {...chat}
                                copy.comment = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
             onClick={
                (clickEvent) => handleSaveButtonClick(clickEvent)}            
            className="button">
                Submit Feedback
            </button>
        </form>
    )
}