import React from 'react';

var Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>
               <h3>&copy; Vishnu {props.month} {props.year}</h3> 
            </center>
            
        </React.Fragment>
    )
}
export default Footer;