import React from 'react'
import './section.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/mepic.png'
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Section = () => {
 return (
  <header>
    <div className='container header__container'>
     <h5>Hello I'm</h5>
     <h1>TETUH WIBINAH ENGONWEI</h1>
    <h5 className='text-light'>Computer Engineer </h5>
  <CTA/>
  <HeaderSocial/>
<div className='my_image'>
    <img src={me} alt='mepic'/>
</div>
<a href='#contact' className='scroll__down'>scroll Don</a>
</div>
</header>
)
}
export default Section;