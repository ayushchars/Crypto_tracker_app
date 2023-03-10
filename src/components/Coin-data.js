import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coins from './Coins'

function Coindata() {
    const [coins, setcoins] = useState([])
    const [search, setsearch] = useState("")
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setcoins(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleSearch = (e) => {
        setsearch(e.target.value)
    }

    const filtereCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className='coin-app'>
            <div className=' coin-search'>
                <h1 className='coin-text'>Search a currency</h1>
                <form>
                    <input type="text" placeholder='search' className='coin-input' onChange={handleSearch} />

                </form>
            </div>
            {filtereCoins.map(coin => {
                return (
                    <Coins key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_percentage_24h} marketcap={coin.market_cap} />
                )
            })}
        </div>
    )
}

export default Coindata
