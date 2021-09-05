function ResultItem (props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <img alt="item" src={props.img} style={{ width: '64px', height: 'auto' }} />
            </div>
            <div style={{ marginLeft: '12px' }}>
                <p style={{ fontSize: '13px', fontFamily: 'Lato' }}>{props.title}</p>
                <p>
                    <span style={{ fontWeight: '700' }}>
                    {props.price}
                    </span>
                    <span style={{ color: '#A62C0D', fontWeight: '700', marginLeft: '4px' }}>
                    {props.price_with_sale}
                    </span>
                </p>                
            </div>
        </div>
    )
}

export default ResultItem