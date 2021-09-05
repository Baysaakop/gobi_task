import './Header.css'
import IconGlobal from './icons/IconGlobal.svg'
import IconClear from './icons/IconClear.svg'
import IconHeart from './icons/IconHeart.svg'
import IconCart from './icons/IconCart.svg'
import IconMenu from './icons/IconMenu.svg'
import IconSearch from './icons/IconSearch.svg'
import GobiLogo from './gobi_logo.png'
import { useState } from 'react'
import SearchDropDown from './SearchDropDown'

function Header (props) {    

    const [searchValue, setSearchValue] = useState('')
    const [searchVisible, setSearchVisible] = useState(false)

    function onSearchChange (e) {
        setSearchValue(e.target.value)
    }

    function onClear () {
        setSearchValue('')
    }

    function onFocus () {
        setSearchVisible(true)
    }

    function onBlur () {
        setSearchVisible(false)
    }

    return (
        <div className={ props.breakpoint === "lg" ? "header lg" : props.breakpoint === "sm" ? "header sm" : "header xs" }>
            <div className="top">
                <div className="left">
                    <div>
                        <img className="global" alt="icon" src={IconGlobal}/>                        
                    </div>
                    <div>
                        Global - English
                    </div>    
                </div>
                { props.breakpoint === "lg" ? (
                    <div className="center">
                        <p>
                            RETURNING AN ORDER? 
                            <a href="/" className="link" >Click for more info</a>
                        </p>
                    </div>
                ) : (
                    []
                )}                
                <div className="right">
                    <a href="/" className="btn-signin" >SIGN IN</a>
                    <a href="/" className="btn-signip" >SIGN UP</a>
                </div>
            </div>
            <div className="bot">
                { props.breakpoint === "lg" ? (
                    <div className="left column">
                        <a href="/">WOMEN</a>
                        <a href="/">MEN</a>
                        <a href="/">HOME</a>
                        <a href="/">ACCESSORIES</a>
                        <a href="/">ORGANIC</a>
                    </div>
                ) : (
                    <div className="left column">
                        <div className="icon">
                            <img className="menu" alt="menu" src={IconMenu}/>     
                        </div>
                        <div className="icon">
                            <img className="search" alt="search" src={IconSearch}/>     
                        </div>
                    </div> 
                )}
                <div className="center column">
                   <img className="logo" alt="logo" src={GobiLogo} />
                </div>
                <div className="right column">
                    { props.breakpoint === "lg" ? (                    
                        <div className="search">
                            <input type="text" placeholder="Search" value={searchValue} onChange={onSearchChange} onFocus={onFocus} onBlur={onBlur} />                        
                            <img className="clear" alt="clear" src={IconClear} onClick={onClear} />     
                            { searchVisible ? 
                                <SearchDropDown />
                            : 
                                <></>
                            }
                        </div>                                    
                    ) : (
                        <div>
                        </div> 
                    )}            
                    <div className="icon">
                        <img className="heart" alt="heart" src={IconHeart}/>     
                    </div>
                    <div className="icon">
                        <img className="cart" alt="cart" src={IconCart}/>     
                    </div>          
                </div>    
            </div>
        </div>
    )
}

export default Header