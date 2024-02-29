import * as React from 'react';

interface props {
  text: string
}

function MenuElement({ text }: props) {

  return (
    <div className='menuElement'>
      <p>{text}</p>
    </div>
  )
}


export default MenuElement;