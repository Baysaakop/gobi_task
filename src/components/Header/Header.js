import './Header.css'
import IconGlobal from './icons/IconGlobal.svg'
import IconClear from './icons/IconClear.svg'
import IconHeart from './icons/IconHeart.svg'
import IconCart from './icons/IconCart.svg'
import GobiLogo from './gobi_logo.png'
import { useState } from 'react'

function Header () {

    const [searchValue, setSearchValue] = useState('')

    function onSearchChange (e) {
        setSearchValue(e.target.value)
    }

    function onClear () {
        setSearchValue('')
    }

    return (
        <div className="header">
            <div className="top">
                <div className="left">
                    <div>
                        <img className="global" alt="icon" src={IconGlobal}/>                        
                    </div>
                    <div>
                        Global - English
                    </div>    
                </div>
                <div className="center">
                    <p>
                        RETURNING AN ORDER? 
                        <a href="/" className="link" >Click for more info</a>
                    </p>
                </div>
                <div className="right">
                    <a href="/" className="btn-signin" >SIGN IN</a>
                    <a href="/" className="btn-signip" >SIGN UP</a>
                </div>
            </div>
            <div className="bot">
                <div className="left">
                    <a href="/">WOMEN</a>
                    <a href="/">MEN</a>
                    <a href="/">HOME</a>
                    <a href="/">ACCESSORIES</a>
                    <a href="/">ORGANIC</a>
                </div>
                <div className="center">
                   <img className="logo" alt="logo" src={GobiLogo} />
                </div>
                <div className="right">
                    <div className="search">
                        <input type="text" placeholder="Search" value={searchValue} onChange={onSearchChange} />                        
                        <img className="clear" alt="clear" src={IconClear} onClick={onClear} />     
                    </div>
                    <div>
                        <img className="heart" alt="heart" src={IconHeart}/>     
                    </div>
                    <div>
                        <img className="cart" alt="cart" src={IconCart}/>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header