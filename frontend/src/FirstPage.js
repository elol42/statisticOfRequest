import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PieChart } from './PieChart'
import { Header } from './Header'
import { InfoOnFirstpage } from './InfoOnFirstPage'
import { Filter } from './Filter'
import { ButtonFirstpage } from './ButtonFirstPage'


export const FirstPage = () => {
return(
  
      
            <section>
                <header>
                    < Header />
                </header>
                <div>
                    < InfoOnFirstpage />
                </div>
             <div>
                 < Filter />
             </div>
                <div>
                < PieChart  />
                </div>
            
            </section>
       

)
  

}
