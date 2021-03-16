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
                    src="../images/img-10.png"
                    text="Nhan cau hon"
                    label="結婚指輪"
                    path='/about'
                    />
                     <GiftsItem 
                    src='../images/img-11.png'
                    text="Vay cuoi "
                    label="ウェディングドレス"
                    path='/about'
                    />
                </ul>
                <ul className="gifts__items">
                    <GiftsItem 
                    src='../images/img-12.png'
                    text="Sieu xe"
                    label="スーパーカー"
                    path='/about'
                    />
                     <GiftsItem 
                    src='../images/img-13.png'
                    text="Biet Thu"
                    label="ヴィラ"
                    path='/about'
                    />
                    <GiftsItem 
                    src='../images/img-14.png'
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
