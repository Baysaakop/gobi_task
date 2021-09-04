import './CategoryItem.css'
import IconRightArrow from '../icons/IconRightArrow.svg'

function CategoryItem (props) {
    return (
        <div className="category-item">
            <img alt="item" src={props.img} />
            <div className="overlay">
                <div className="left">
                    {props.text}
                </div>
                <div className="right">
                    <img alt="icon-right-arrow" src={IconRightArrow} />
                </div>
            </div>
        </div>
    )
}

export default CategoryItem