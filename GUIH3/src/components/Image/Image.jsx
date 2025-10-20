import React from 'react'
import ShaqPortrait from 'C:\\Users\\Z6APT\\GUIH3\\GUIH3\\src\\assets\\images\\PotrætShaquille.jpg' // adjust path as needed

export const Image = () => {
  return (
    <img 
      src={ShaqPortrait}
      alt="Portrait of Shaquille"
      style={{ width: '300px', height: '300px' }}
    />
  )
}