import React from 'react'
import Product from "./Product"
import './Home.css';

function Home() {
    return ( 
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB410675382_.jpg"
            alt=""
             />
   <div className="home__row">
   <Product
         id="1234567"
         title="AmazonBasics 127cm (50 inch) Fire TV Edition 4K Ultra HD Smart LED TV AB50U20PS (Black)"
         price={11.96}
         rating={5}
         image="https://m.media-amazon.com/images/I/81c5klKpUdL._AC_UY218_.jpg"
     />
      <Product
         id="1234567"
         title="Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
         price={11.96}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/71gljD6pGtL._SY741_.jpg"
     /> 
   </div>
   <div className="home__row">
   <Product
         id="1234567"
         title="Noise Air Buds Truly Wireless Bluetooth Earphones with Great Call Quality, 20 Hour Playtime and Smart Touch Control - ICY White"
         price={10.23}
         rating={3}
         image="https://images-na.ssl-images-amazon.com/images/I/61QEtif9zRL._SL1500_.jpg"
     /> 
         <Product
         id="1234567"
         title="New Apple Watch Series 6 (GPS + Cellular, 40mm) - Blue Aluminium Case with Deep Navy Sport Band"
         price={250}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/718qilkBKUL._SX679_.jpg"
     /> 
         <Product
         id="1234567"
         title="IFB 8.5 kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (Executive Plus VX ID, White, Inbuilt Heater, Aqua Energie water softener)"
         price={11.96}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/81DB9tk3vaL._SY879_.jpg"
     /> 
     
   </div>
   <div className="home__row">
   <Product
         id="1234567"
         title="Godrej 1.5 Ton 5 Star Inverter Split AC (Copper, Anti Bacterial Filter, 2020 Model, GIC 18HTC5-WTA, White"
         price={11.96}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51aw6Y%2BJOyL._SL1000_.jpg"
     /> 
   </div>
     </div> 
    )
}

export default Home
