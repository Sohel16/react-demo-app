import * as React from 'react';

import './main.css';



class Main extends React.Component<any, any> {
    render() {
        return (
            <div className="main-wraper">
                <div className="section-wraper">
                    <div className="main">i am main</div>
                    <div className="article">
                        I am article
                    </div>  
                    
                </div>
                <footer>
                    <div className="footer-top"> 
                    I am footer
                    </div>
                    <div className="footer-bottom"></div>
                  
                </footer>
            </div>
        )
    }
}

export default Main;