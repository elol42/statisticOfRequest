import React from 'react';

import { PieChart } from './PieChart'
import { Header } from './Header'
import { InfoOnFirstpage } from './InfoOnFirstPage'
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
        < ButtonFirstpage />
        </div>

        <div>
        < PieChart  />
        </div>
        
    </section>
    
    
)
  

}
