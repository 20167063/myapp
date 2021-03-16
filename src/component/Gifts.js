 import React from 'react'
import GiftsItem from './GiftsItem'
import './Gifts.css'

function Gifts() {
    return (
        <div className="gifts">
            <h1>Before choosing please see your gift if you choose yes</h1>
            <div className="gifts__wrapper">
                <ul className="gifts__items">
                    <GiftsItem 
                    src= "https://www.pnj.com.vn/images/detailed/60/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k-ya36226-ya36227.png"
                    text="Nhan cau hon"
                    label="結婚指輪"
                    path='/about'
                    />
                     <GiftsItem 
                    src='https://2sao.vietnamnetjsc.vn/images/2020/11/14/14/34/IMG0616.jpg'
                    text="Vay cuoi "
                    label="ウェディングドレス"
                    path='/about'
                    />
                </ul>
                <ul className="gifts__items">
                    <GiftsItem 
                    src='https://storage.oxii.vn/Cache/Sites/OXII/Storage/Images/2019/1/28/1920/16_5.jpg'
                    text="Sieu xe"
                    label="スーパーカー"
                    path='/about'
                    />
                     <GiftsItem 
                    src='https://www.hancorp.com.vn/wp-content/uploads/2020/09/biet-thu-1-1.jpg'
                    text="Biet Thu"
                    label="ヴィラ"
                    path='/about'
                    />
                    <GiftsItem 
                    src='https://www.omfif.org/wp-content/uploads/2020/08/dollar-volatility-newweb.jpg'
                    text="Dollar"
                    label="お金"
                    path='/about'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Gifts
