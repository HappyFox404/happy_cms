import React from 'react'
import Style from './Layouts.module.css'

export default function HorizontalLayout({children, ...props}) {
    return (
        <div className={Style.HL} {...props}>
            {children}
        </div>
    )
}
