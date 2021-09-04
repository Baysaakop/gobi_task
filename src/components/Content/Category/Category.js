import CategoryItem from "./CategoryItem";
import './Category.css'

function Category (props) {
    return (
        <div className="category">
            <div className="column">
                <CategoryItem img={props.img1} text={props.text} />
            </div>
            <div className="column">
                <div className="title">
                    {props.title}
                </div>                    
                <CategoryItem img={props.img2} text={props.text} />
            </div>
            <div className="column">
                <CategoryItem img={props.img3} text={props.text} />
            </div>
        </div>
    )
}

export default Category