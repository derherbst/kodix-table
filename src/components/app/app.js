import React from 'react'

import CarAddForm from '../car-add-form'
import CarTable from '../car-table'

import './index.scss'

const App = () => {
    return (
        <div className='app'>
            <h1 className='app__title'>¡Ay caramba!</h1>
            <div className='app__form'>
                <CarAddForm />
            </div>
            <div className='app__table'>
                <CarTable />
            </div>
        </div>
    )
};

export default App
