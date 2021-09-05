import CategoryItem from "./CategoryItem";
import './Category.css'

function Category (props) {

    function getWitdh() {
        let percent = 100 / props.data.length
        return `${percent}%`
    }

    return (
        <div className={ props.breakpoint === "lg" ? "category lg" : props.breakpoint === "sm" ? "category sm" : "category xs" }>
            { props.data.map(item => (
                <div className="column" style={{ width: getWitdh() }}>
                    { item.title ? (
                        <div className="title">
                            {item.title}
                        </div>         
                    ) : []}
                    <CategoryItem img={item.img} text={item.text} />
                </div>    
            )) }            
        </div>
    )
}

export default Category