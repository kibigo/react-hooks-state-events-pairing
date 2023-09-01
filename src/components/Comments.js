import React, {useState} from "react";

const Comments = ({NameComment}) => {

    const [isVisible, setIsVisible] = useState(true)
    const [comments, setComments] = useState(NameComment)

    const hideComment = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <button onClick={hideComment}>{isVisible ? 'Hide Comments' : 'Show Comments'}</button>
            {isVisible && (
                <div>
                    <h2>2 Comments:</h2>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                <strong>{comment.user}</strong> <br/> <br/>
                                {comment.comment}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Comments