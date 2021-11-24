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
                    <Button>Кнопка 1</Button>
                    <Button>Кнопка 2</Button>
                </VerticalLayout>
            </div>
        </div>
    )

    /*
<SwitchContainer Index={0}>
                    
                </SwitchContainer>
    */
}
