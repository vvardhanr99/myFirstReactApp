import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    constructor(){
        super()
        this.state={
            title : 'React App',
            userInput : "User Text Here"
        }
    }
    handleChange = (event)=>{
       //console.log(event.target.value)
        this.setState({userInput:event.target.value?event.target.value: 'User Text Here'})
        this.props.userText(event.target.value)
    }
    render(){
      return (
        <React.Fragment>
            <div className='header'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
               <center >
                <h1>{this.state.title}</h1>
                <div>
                    <input type="text" onChange={this.handleChange}/>
                    <div><p>{this.state.userInput}</p></div>
                </div>   
            </center>
            </div>
            <hr/> 
        </React.Fragment>
    )  
    }
    
}
export default Header;