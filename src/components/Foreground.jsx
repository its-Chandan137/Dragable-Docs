import React, { useRef, useState } from 'react'
import Card from './Card'
import Maker from './maker';
import './addButton.css'
import PointerSync from './PointerSync';

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc:"Anything will work as long as its string" , 
      fileSize: ".9mb" , 
      close: false , 
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc:"Anything will work as lon" , 
      fileSize: ".9mb" , 
      close: true , 
      tag: {isOpen: false, tagTitle: "Pending", tagColor: "grey"},
    },
    {
      desc:"Anything will ring" , 
      fileSize: ".9mb" , 
      close: true , 
      tag: {isOpen: false, tagTitle: "Unavailable", tagColor: "red"},
    },
  ];


  return (
    <div>
        <div ref = {ref} className='Foreground-full-Screen'>
          {data.map((x,i) => (
            <Card key ={i} data = {x} refrence = {ref}/>
          ))}
        </div>
        <Maker/>
        <PointerSync/>
    </div>
  )
}

export default Foreground