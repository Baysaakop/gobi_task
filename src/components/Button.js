import './Button.css'

function Button (props) {
    return (
        <div className="btn" style={{ background: props.background, width: props.width }}>
            <div className="text" style={{ color: props.color }}>
                {props.text}
            </div>
        </div>
    )
}

export default Button