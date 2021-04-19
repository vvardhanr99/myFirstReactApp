import React,{Component} from 'react';
import Header from './Header';
import Footer from'./Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()
        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    filteredNews=(userInput)=>{
        const output = this.state.news.filter((data)=>{
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(data)=>{this.filteredNews(data)}}/>
                <NewsDisplay news={this.state.filtered}/>
                <Footer year={2021} month={'April'}/>   
            </React.Fragment>
        )
    }
    
}
export default Home;