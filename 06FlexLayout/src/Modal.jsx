import React from 'react'

import { RxCross2 } from "react-icons/rx";

function Modal({ children, onClose, open }) {
    return (
        <div className={`backdrop-blur-sm z-10 w-full h-full flex fixed justify-center items-center ${open ? 'visible bg-black/20 ' : "invisible"}`}>
            <div className={`p-3 transition-all rounded-xl inset-0 bg-white relative ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
                <div className='absolute top-3 right-3'>
                <RxCross2 fontSize={24} onClick={onClose}/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
