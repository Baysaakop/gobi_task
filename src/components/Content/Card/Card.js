import { useState } from 'react'
import './Card.css'
import IconHeartFilled from '../icons/IconHeartFilled.svg'

function Card (props) {

    const [selectedColor, setSelectedColor] = useState()

    function onSelectColor (id) {
        setSelectedColor(id)
    }

    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" alt="card-img" src={props.img} />
                { props.is_new ? 
                    <div className="new">
                        NEW
                    </div>
                : 
                    <></> 
                }
                <div className={ props.love ? 'love checked' : 'love' }>
                    <img alt="love" src={IconHeartFilled} />
                </div>
            </div>
            <p className="card-title">{props.title}</p>
            {props.colors > 6 ?
                <div className="card-colors">
                    <div className={ selectedColor === 1 ? "color checked" : "color"} style={{ background: '#CC3B38' }} onClick={() => onSelectColor(1)} />                                            
                    <div className={ selectedColor === 2 ? "color checked" : "color"} style={{ background: '#6D705A' }} onClick={() => onSelectColor(2)} />
                    <div className={ selectedColor === 3 ? "color checked" : "color"} style={{ background: '#E0D7C8' }} onClick={() => onSelectColor(3)} />
                    <div className={ selectedColor === 4 ? "color checked" : "color"} style={{ background: '#000000' }} onClick={() => onSelectColor(4)} />
                    <div className={ selectedColor === 5 ? "color checked" : "color"} style={{ background: '#718CBF' }} onClick={() => onSelectColor(5)} />
                    <div className={ selectedColor === 6 ? "color checked" : "color"} style={{ background: '#985B4F' }} onClick={() => onSelectColor(6)} />         
                    <div className={ selectedColor === 7 ? "color checked" : "color"} style={{ background: '#C66666' }} onClick={() => onSelectColor(7)} />                      
                    <div>+17</div>                                            
                </div>
            :
                <p className="card-description">+{props.colors} colors</p>                
            }  
            {props.price ? 
                <p>
                    <span className="card-price">$ {props.price}</span>                
                    <span className="card-price-with-sale">$ {props.price_with_sale}</span>                
                </p>
            :
                <></>
            }                               
        </div>
    )
}

export default Card