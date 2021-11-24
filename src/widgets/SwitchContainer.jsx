import React from 'react'
import Styles from './SwitchContainer.module.css'

export default function SwitchContainer({Index ,children, ...props}) {
    const viewElements = children.length > 0;
    
    let currentElement = Index;
    
    return (
        <div className={Styles.Base}>
            {(viewElements) && children.map((value,idx) => {
                if(idx == currentElement) return value;
            })}
        </div>
    )
}
