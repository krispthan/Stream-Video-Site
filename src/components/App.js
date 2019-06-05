import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return(  
        <div>
             <div>PageOne </div>
             <Link to="/pagetwo">Navigate to Page Two</Link>
        </div>
    
    )
}

const PageTwo = () => {
    return( 
               <div>
                     PageTwo
                     <button>Clickme</button>
                     <Link to="/"> Navigate to Page One</Link>
             </div>
         );
}
const App = () =>{
    return (
            <div>
                <BrowserRouter>
                  <div>
                       <Route path="/" exact component={PageOne}/>
                         <Route path="/pagetwo" component={PageTwo}/>   
                   </div>  
                </BrowserRouter>   
            </div>
        )
}

export default App;