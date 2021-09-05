import './Footer.css'
import IconFacebook from './icons/IconFacebook.svg'
import IconInstagram from './icons/IconInstagram.svg'
import IconTwitter from './icons/IconTwitter.svg'
import IconYoutube from './icons/IconYoutube.svg'
import IconGlobal from '../Header/icons/IconGlobal.svg'
import Payment1 from './images/Payment1.svg'
import Payment2 from './images/Payment2.svg'
import Payment3 from './images/Payment3.svg'
import Payment4 from './images/Payment4.svg'
import Payment5 from './images/Payment5.svg'
import Payment6 from './images/Payment6.svg'
import Payment7 from './images/Payment7.svg'
import Payment8 from './images/Payment8.svg'

function Footer (props) {
    return (
        <div className={ props.breakpoint === "lg" ? "footer lg" : props.breakpoint === "sm" ? "footer sm" : "footer xs" }>
            <div className="top">
                <div className="left">
                    <div className="menu">
                        <div style={{ width: '25%' }}>
                            <p style={{ fontSize: '14px', marginBottom: '32px' }}>ABOUT US</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Our History</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Product Care</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Store Location</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Sustainability</p>
                        </div>
                        <div style={{ width: '25%' }}>
                            <p style={{ fontSize: '14px', marginBottom: '32px' }}>POLICY</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Shipping & Return Policy</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Privacy Policy</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Impressum</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Return Portal</p>
                        </div>
                        <div style={{ width: '25%' }}>
                            <p style={{ fontSize: '14px', marginBottom: '32px' }}>CUSTOMER SERVICE</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>General Terms and Conditions</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Contact Us</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>News</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>FAQ</p>
                        </div>
                        <div style={{ width: '25%' }}>
                            <p style={{ fontSize: '14px', marginBottom: '32px' }}>CUSTOMER SERVICE</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>General Terms and Conditions</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>Contact Us</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>News</p>
                            <p style={{ fontSize: '14px', color: '#5f5f5f' }}>FAQ</p>
                        </div>
                    </div>
                    <div className="payments">
                        <img alt="img1" src={Payment1} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                        <img alt="img2" src={Payment2} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                        <img alt="img3" src={Payment3} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                        <img alt="img4" src={Payment4} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                        <img alt="img5" src={Payment5} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                        <img alt="img6" src={Payment6} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                        <img alt="img7" src={Payment7} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                        <img alt="img8" src={Payment8} style={{ width: '40px', height: '24px', objectFit: 'fill', marginRight: '12px' }} />
                    </div>
                </div>
                <div className="right">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '14px' }}>FOLLOW US</p>
                        <img alt="icon" src={IconFacebook} style={{ width: '16px', height: '16px', marginTop: '24px' }} />
                        <img alt="icon" src={IconInstagram} style={{ width: '16px', height: '16px', marginTop: '16px' }} />
                        <img alt="icon" src={IconTwitter} style={{ width: '16px', height: '16px', marginTop: '16px' }} />
                        <img alt="icon" src={IconYoutube} style={{ width: '16px', height: '16px', marginTop: '16px' }} />
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '32px' }} >
                            <div>Global - English</div>
                            <div>
                                <img className="global" alt="icon" src={IconGlobal}/>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <p>All content Copyright © 2020 GOBI Cashmere</p>
            </div>
        </div>
    )
}

export default Footer