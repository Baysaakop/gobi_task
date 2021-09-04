import Button from '../Button'
import './Content.css'
import HomeImg from './home_img.png'
import SaleImg from './sale_img.png'
import WinterImg1 from './winter_img1.png'
import WinterImg2 from './winter_img2.png'
import WinterImg3 from './winter_img3.png'
import WomenImg1 from './women_img1.png'
import WomenImg2 from './women_img2.png'
import IconRightArrow from './icons/IconRightArrow.svg'

function Content () {
    return (
        <div className="content">
            <div className="top">
                <img className="home_img" alt="home" src={HomeImg} />
                <div className="overlay">
                    <img className="sale_img" alt="sale" src={SaleImg} />   
                    <div className="shop_now">
                        <Button text="SHOP NOW" color="#000" background="#fff" />
                    </div>                 
                </div>  
            </div>
            <div className="winter">
                <div className="left">
                    <h1>WINTER SPICE 2020</h1>
                    <p>Infusion of summer pieces and cashmere <br/>silk blends.</p>
                    <div>
                    <Button text="SHOP NOW" color="#fff" background="#272727" />
                    </div>
                </div>
                <div className="right">   
                    <div className="row">
                        <div className="column1">
                            <img alt="img" src={WinterImg1} />
                        </div>
                        <div className="column2">
                            <img alt="img" src={WinterImg2} />
                            <img alt="img" src={WinterImg3} />
                        </div>               
                    </div>                      
                    <p className="note">Infusion of summer pieces and cashmere silk blends.</p>
                </div>                
            </div> 
            <div className="women">
                <div className="column">
                    <img alt="women" src={WomenImg1} />
                    <div className="overlay">
                        <div className="left">
                            CARDIGANS
                        </div>
                        <div className="right">
                            <img alt="icon-right-arrow" src={IconRightArrow} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="title">
                        WOMEN
                    </div>                    
                    <img alt="women" src={WomenImg2} />
                    <div className="overlay">
                        <div className="left">
                            CARDIGANS
                        </div>
                        <div className="right">
                            <img alt="icon-right-arrow" src={IconRightArrow} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <img alt="women" src={WomenImg1} />
                    <div className="overlay">
                        <div className="left">
                            CARDIGANS
                        </div>
                        <div className="right">
                            <img alt="icon-right-arrow" src={IconRightArrow} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="women">
                <div className="column">
                    <img alt="women" src={WomenImg1} />
                    <div className="overlay">
                        <div className="left">
                            CARDIGANS
                        </div>
                        <div className="right">
                            <img alt="icon-right-arrow" src={IconRightArrow} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="title">
                        WOMEN
                    </div>                    
                    <img alt="women" src={WomenImg2} />
                    <div className="overlay">
                        <div className="left">
                            CARDIGANS
                        </div>
                        <div className="right">
                            <img alt="icon-right-arrow" src={IconRightArrow} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <img alt="women" src={WomenImg1} />
                    <div className="overlay">
                        <div className="left">
                            CARDIGANS
                        </div>
                        <div className="right">
                            <img alt="icon-right-arrow" src={IconRightArrow} />
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Content