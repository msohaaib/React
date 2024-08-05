import React from 'react'

function Button(childrens, type='button', bgColor = 'bg-blue-500', textColor = "text-white", className = "", ...props) {
  return (
    <button
    className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}{...props}
    >{childrens}</button>
  )
}

export default Button
