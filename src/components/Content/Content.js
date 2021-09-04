import Button from '../Button'
import './Content.css'
import HomeImg from './images/home_img.png'
import SaleImg from './images/sale_img.png'
import WinterImg1 from './images/winter_img1.png'
import WinterImg2 from './images/winter_img2.png'
import WinterImg3 from './images/winter_img3.png'
import WomenImg1 from './images/women_img1.png'
import WomenImg2 from './images/women_img2.png'
import MenImg1 from './images/men_img1.png'
import MenImg2 from './images/men_img2.png'
import CardImg1 from './images/card_img1.png'
import CardImg2 from './images/card_img2.png'
import CardImg3 from './images/card_img3.png'
import CardImg4 from './images/card_img4.png'
import CardImg5 from './images/card_img5.png'
import CardImg6 from './images/card_img6.png'
import CardImg7 from './images/card_img7.png'
import CardImg8 from './images/card_img8.png'
import AboutImg from './images/about_img.png'
import Category from './Category/Category'
import CardRow from './Card/CardRow'

const row1 = [
    {        
        id: 1,
        img: CardImg1,        
        title: 'Zweiseitiger Wendemantel Mit Schmetterlingsxzds',
        colors: 6,
        price: '299.00',
        price_with_sale: '79.00',
        is_new: true
    },
    {        
        id: 2,
        img: CardImg2,        
        title: 'Écharpe tisée avec bords contrastants et franges',
        colors: 17,        
        love: true
    },
    {        
        id: 3,
        img: CardImg3,        
        title: 'Трикотажный Супер Мягкий Плед Контрастного Оттенка',
        colors: 6,
        price: '299.00',
        price_with_sale: '79.00'
    },
    {        
        id: 4,
        img: CardImg4,        
        title: 'Кардиган в Стиле Колор-Блок с V-Образным Воротником',
        colors: 6,
        price: '299.00',
        price_with_sale: '79.00'
    }    
]

const row2 = [
    {        
        id: 5,
        img: CardImg5,        
        title: 'Zweiseitiger Wendemantel Mit Schmetterlingsxzds',
        colors: 6,
        price: '299.00',
        price_with_sale: '79.00',
        is_new: true
    },
    {        
        id: 6,
        img: CardImg6,        
        title: 'Écharpe tisée avec bords contrastants et franges',
        colors: 17,        
        love: true
    },
    {        
        id: 7,
        img: CardImg7,        
        title: 'Трикотажный Супер Мягкий Плед Контрастного Оттенка',
        colors: 6,
        price: '299.00',
        price_with_sale: '79.00'
    },
    {        
        id: 8,
        img: CardImg8,        
        title: 'Кардиган в Стиле Колор-Блок с V-Образным Воротником',
        colors: 6,
        price: '299.00',
        price_with_sale: '79.00'
    }
]

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
            <Category img1={WomenImg1} img2={WomenImg2} img3={WomenImg1} title="WOMEN" text="CARDIGANS" />                        
            <Category img1={MenImg1} img2={MenImg2} img3={MenImg1} title="MEN" text="CARDIGANS" />     
            <div className="gift">
                <p className="title">TO GET AND TO GIFT</p>
                <CardRow data={row1} />
                <CardRow data={row2} />
            </div>                   
            <div className="about">
                <div className="left">
                    <img alt="about" src={AboutImg} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="right">  
                    <p className="title">ABOUT US</p>
                    <p className="description">
                    Aute et officia anim consectetur consequat velit minim irure Lorem ad. Officia nisi sunt est eiusmod occaecat excepteur velit reprehenderit occaecat cillum anim ad magna aliqua. Sint enim Lorem amet in tempor non ea duis cillum. Cillum consectetur in in aliqua. Nostrud minim duis cupidatat et ea sint. 
                    </p>
                    <Button text="READ MORE" color="#fff" background="#272727" />
                </div>
            </div>      
            <div className="subscribe">
                <p className="title">Subscribe</p>
                <p className="description">
                Sign up for emails and receive early access to new arrivals, sales, events + more.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
                    <input type="text" placeholder="Enter your email address" style={{ padding: '20px', border: 0, borderRadius: '10px', background: '#F5F7F6', width: '480px', marginRight: '-16px' }} />  
                    <Button text="SUBMIT" color="#fff" background="#272727" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ width: '640px', textAlign: 'left' }}>
                    By signing up, you will receive Gobi Cashmere offers, promotions and other commercial messages. You are also agreeing to Gobi Cashmere's Privacy Policy. You may unsubscribe at any time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content