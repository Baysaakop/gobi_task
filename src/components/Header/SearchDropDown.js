import ResultItem from './ResultItem'
import './SearchDropDown.css'
import ItemImage from './result_item_img.png'
import IconArrow from './icons/IconRight.svg'

function SearchDropDown (props) {
    return (
        <div className="search-drop-down">
            <div className="info">
                <p>
                    Press <strong> enter </strong> to select, <strong>↑ ↓</strong> to navigate, <strong> esc </strong> to dismiss
                </p>
            </div>
            <div className="result">
                <div className="items">
                    <div className="row">
                        <div className="column">
                            <ResultItem img={ItemImage} title="Chill Summer Essential Set" price="$899" price_with_sale="$620.32" />
                        </div>
                        <div className="column">
                            <ResultItem img={ItemImage} title="Chill Summer Essential Set" price="$899" price_with_sale="$620.32" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <ResultItem img={ItemImage} title="Chill Summer Essential Set" price="$899" price_with_sale="$620.32" />
                        </div>
                        <div className="column">
                            <ResultItem img={ItemImage} title="Chill Summer Essential Set" price="$899" price_with_sale="$620.32" />
                        </div>
                    </div>
                    <div className="view_all">
                        <a href="/">View all</a>
                        <strong> (234) </strong>
                        <img alt="arrow" src={IconArrow} style={{ width: '12px', height: 'auto', marginLeft: '24px', cursor: 'pointer' }} />
                    </div>
                </div>
                <div className="categories">
                    <div className="category">
                        Sweater
                    </div>
                    <div className="category">
                        Basic
                    </div>
                    <div className="category">
                        Cardigans
                    </div>
                    <div className="category">
                        Hoodies
                    </div>
                    <div className="category">
                        Crew Necks
                    </div>
                    <div className="category">
                        Turtle Necks
                    </div>
                    <div className="category">
                        V Necks
                    </div>
                    <div className="category">
                        Vests & Tops
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDropDown