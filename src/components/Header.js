import react from "react";

const Header = (props) => {
    return (
        <div>
            <h2>{props.h2}</h2>
            <p>{props.views} Views | Uploaded {props.date}</p>
            
        </div>
    )
}

export default Header