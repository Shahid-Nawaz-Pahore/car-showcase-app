"use-client"
import React from 'react'
import Image from 'next/image'
import { CustomBottonProps } from '@/types'
const CustomBotton = ({title,containerStyles,
handleClick}:CustomBottonProps) => {
  return (
<button
disabled={false}
type={"button"}
className={`custum-btn ${containerStyles}`}
onClick={()=>{}}
>
<span className={`flex-1`}>
    title
</span>
</button>
  )
}

export default CustomBotton