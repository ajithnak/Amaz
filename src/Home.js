import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
           < img 
             className="home__image" 
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt=""
            />
            <div className="home__row">
            <Product
            id="1"
            title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
            price={29999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71KVeQql77S._SX679_.jpg"
        />
        <Product
            id="2"
            title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
            price={14999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
        />
        <Product
            id="3"
            title="Mi 11X 5G Celestial Silver 6GB RAM 128GB ROM | SD 870"
            price={29999}
            rating={4}
            image="https://m.media-amazon.com/images/I/81PQCRubagS._SL1500_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
            id="4"
            title="Apple iPhone 12 (128GB) - Blue"
            price={82999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
        />
        <Product
            id="5"
            title="Samsung Galaxy S20 FE (Cloud Navy, 8GB RAM, 128GB Storage)"
            price={55999}
            rating={5}
            image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"
        />
        
        </div>
        <div className="home__row">
        <Product
        id="6"
        title="Acer Nitro 5 Intel Core i5-9300H 15.6-inch Full HD 1920 x 1080 Display Thin and Light Gaming Laptop (8GB/1TB+256GB SSD/Windows 10 Home/GTX 1650 Graphics/Obsidian Black/2.3 kgs)"
        price={99840}
        rating={4}
        image="https://m.media-amazon.com/images/I/71QXJg8uOCL._SX679_.jpg"
    />
        <Product
            id="7"
            title="ASUS ROG Strix G17 G712LU-EV013T (10th Gen i7-10750H, 16GB RAM, 512GB SSD, RGB Backlit 4-Zone, Windows 10, WiFi 6) Black Plastic - 17.3 Inch Full HD 144 Hz Gaming GTX 1660Ti 6GB"
            price={109999}
            rating={3}
            image="https://m.media-amazon.com/images/I/71nlgFHDfZL._SL1500_.jpg"
        />
        <Product
            id="8"
            title="HP OMEN 10th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (i5-10300H/8GB/1TB SSD/Windows 10/NVIDIA GTX 1650ti 4GB/Shadow Black/2.36 kg)"
            price={85999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71HXR1mNdYL._SL1500_.jpg"
        />
        
        </div>
        <div className="home__row">
        <Product
        id="9"
        title="Lenovo Legion 7 10th Gen Intel Core i7 15.6 inch Full HD Gaming Laptop (16GB/1TB SSD/Windows 10/MS Office 2019/144 Hz/NVIDIA RTX 2070 8GB GDDR6 Graphics/Slate Grey/2.25Kg)"
        price={149999}
        rating={5}
        image="https://m.media-amazon.com/images/I/61VyUXLL+8L._SL1000_.jpg"
    />
    <Product
        id="10"
        title="ASUS ROG Zephyrus M GU502GU-ES003T 15.6-inch FHD 144Hz Gaming Laptop (9th Gen Core i7-9750H/16GB RAM/512GB PCIe SSD/Windows 10/6GB NVIDIA GeForce GTX 1660 Ti Graphics/1.93 Kg)"
        price={129999}
        rating={4}
        image="https://m.media-amazon.com/images/I/81YV9uenExL._SL1500_.jpg"
    />
        </div>

            
        </div>
    )
}

export default Home
