import React from 'react'
import "./Coin.css"
function Coins({ name, symbol, price, image, volume, priceChange, marketcap }) {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='' />
                    <h1>{name}</h1>
                    <p className='coin-symbole'>
                        {symbol}
                    </p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-value'>${volume.toString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)} %</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}</p>
                    )}
                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coins
