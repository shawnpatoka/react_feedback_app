import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    // state
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this item is from context 1',
            rating: 5
        },
        {
            id: 2,
            text: 'this item is from context 2',
            rating: 10
        },
        {
            id: 3,
            text: 'this item is from context 3',
            rating: 7
        },
    ]) 


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    // update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...updItem } : item ))
        )
    }


    // delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext