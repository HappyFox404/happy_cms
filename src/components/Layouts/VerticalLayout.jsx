import React from 'react'
import Style from './Layouts.module.css'

export default function VerticalLayout({children, ...props}) {
    return (
        <div className={Style.VL} {...props}>
            {children}
        </div>
    )
}
