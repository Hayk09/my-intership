import React from 'react'
import './index.scss'
import Wood from '../../assets/Rectangle 15.png'
import Woods from '../../assets/Rectangle 17.png'
import Gorciqner from '../../assets/Rectangle 18.png'

const Card = () => {
    return(
        <>
          <div className='div'>
              <p className='txt'>Materials that we use</p>
          </div>
          <div className='images'>
              <img src={Wood} alt="ped" className='image1'/>
              <img src={Woods} alt="peder" className='image2'/>
              <img src={Gorciqner} alt="gorciqner" className='image3'/>
          </div>
          <div className='div2'>
              <button className='btn'>DESCOVER</button>
          </div>
          <div className='div3'>
              <p className='txt2'>Best offer of day</p>
          </div>
        </>
    )
}

export default Card;