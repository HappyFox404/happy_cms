import React from 'react'
import SwitchContainer from '../widgets/SwitchContainer'
import HorizontalLayout from '../components/Layouts/HorizontalLayout'
import VerticalLayout from '../components/Layouts/VerticalLayout'
import Styles from './App.module.css'
import Button from '../components/Buttons/Button'

export default function App() {
    return (
        <div className={Styles.App}>
            <ul className={Styles.Menu}>
                <li><a href='/'>Страница 1</a></li>
                <li><a href='/'>Страница 2</a></li>
                <li><a href='/'>Страница 3</a></li>
            </ul>
            <div className={Styles.Content}>
                <VerticalLayout style={{
                    width: '200px'
                }}>
                    <Button Action={()=>{alert("Click 1");}}>Кнопка 1</Button>
                    <Button Action={()=>{alert("Click 2");}}>Кнопка 2</Button>
                </VerticalLayout>
                <SwitchContainer Index={0}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </SwitchContainer>
            </div>
        </div>
    )
}
