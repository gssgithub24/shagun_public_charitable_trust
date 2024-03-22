import React from 'react'

const Headercomponent = ({text}) => {
  return (
    <ul className="text-base font-roboto relative cursor-pointer group">
            <li className="relative group-hover:text-orange-300 transition-all duration-150 transform group-hover:-translate-y-1">
              <p className="group-hover:pb-2 transition-all duration-150 ">
                {text}
              </p>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0  transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
            </li>
    </ul>
  )
}

export default Headercomponent