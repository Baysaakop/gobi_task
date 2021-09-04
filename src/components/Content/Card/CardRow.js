import Card from './Card'
import './CardRow.css'

function CardRow (props) {
    return (
        <div className="card-row">
            {props.data.map(item => (
                <div className="column">
                    <Card 
                        key={item.id}
                        img={item.img} 
                        title={item.title} 
                        colors={item.colors} 
                        price={item.price}
                        price_with_sale={item.price_with_sale}
                        is_new={item.is_new}
                        love={item.love}
                    />
                </div>
            ))}
        </div>
    )
}

export default CardRow