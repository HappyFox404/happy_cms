import React from 'react'
import Style from './Buttons.module.css'

export default function Button({Action, children, ...props}) {
    const BtnAction = Action;
    return (
        <div className={Style.DefBtn} onClick={() => {if(BtnAction) BtnAction();}} {...props}>
            {children}
        </div>
    )
}
