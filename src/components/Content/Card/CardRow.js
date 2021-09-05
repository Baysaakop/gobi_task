import { useState } from 'react'
import Card from './Card'
import './CardRow.css'

function CardRow (props) {

    const [page, setPage] = useState(1)

    function getMobileData() {
        return props.data.slice((page - 1) * 2, page * 2)
    }

    function getPages() {
        let result = []
        let total = Math.ceil(props.data.length / 2)
        for (let i = 0; i < total; i++) {
            result.push(i+1)
        }
        return result
    }

    return (        
        props.breakpoint === "xs" ? (
            <div>
                <div className="card-row">
                    {getMobileData().map(item => (
                        <div className="column" style={{ width: '50%' }}>
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
                <div className="pages">
                    { getPages().map(p => (
                        <div className={page === p ? "page checked" : "page"} onClick={() => setPage(p)}>                            
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="card-row">
                {props.data.map(item => (
                    <div className="column" style={{ width: '25%' }}>
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
    )
}

export default CardRow