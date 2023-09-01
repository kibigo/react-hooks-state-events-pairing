import react, {useState} from "react";

const Buttons = (props) => {

    const [Like, setLike] = useState(props.like)

    const [Dislike, setDisLike] = useState(props.dislike)

    const increaseLike = () => {
        setLike(count => {return count +1})
    }
    const decreaseLike = () => {
        setDisLike(count => {return count - 1})
    }
    return (
        <div>
            <button onClick={increaseLike}>{Like} Like</button>
            <button onClick={decreaseLike}>{Dislike} Dislike</button>
        </div>
    )
}

export default Buttons