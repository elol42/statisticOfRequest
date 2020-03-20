import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PieChart } from './PieChart'
import { Header } from './Header'
import { InfoOnFirstpage } from './InfoOnFirstPage'
import { Filter } from './Filter'
import { ButtonFirstpage } from './ButtonFirstPage'

import './firstPage.css'


export const FirstPage = () => {
return(
            <section>
                <header>
                    < Header />
                </header>
                <div className="mainSection">     
                    <div>
                        < InfoOnFirstpage />
                    </div>
                    
                        <div>
                        < PieChart  />
                        </div>
                        <div>
                        < Filter />
                    </div>
                </div>
            </section>
)
  

}
