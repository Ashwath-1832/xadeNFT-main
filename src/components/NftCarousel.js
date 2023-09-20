import React from 'react'
import Marquee from "react-fast-marquee";
import "../styles/better.css";

const NftCarousel = () => {
    return (
        
            <div className="lol">
        <Marquee style={{ height: '222px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }} speed={180}>
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              <img className='Imgcarousel' src={process.env.PUBLIC_URL + '/Media/gold.png'} alt="Image" />
              <img className='Imgcarousel' src={process.env.PUBLIC_URL + '/Media/diamond.png'} alt="Image" />
              <img className='Imgcarousel' src={process.env.PUBLIC_URL + '/Media/ruby_full 1.png'} alt="Image" />
              <img className='Imgcarousel' src={process.env.PUBLIC_URL + '/Media/silver 1.png'} alt="Image" />
              <img className='Imgcarousel' src={process.env.PUBLIC_URL + '/Media/diamond 1.png'} alt="Image" />
              
            </React.Fragment>
          ))}
        </Marquee>
      </div>
       
    )
}

export default NftCarousel