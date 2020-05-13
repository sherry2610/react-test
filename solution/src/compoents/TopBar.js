import React, {Component} from 'react'

// import { Progress } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

class TopBar extends Component{
    

    render(){
        const {questionToShow} = this.props
        const num = questionToShow*50
        let barStyle = {border:'1px solid black',width:num,height:"50px",backgroundColor:'black',fontSize:'30px',color:"white",textAlign:"right"}
        return (
            <div style={barStyle}>{questionToShow*5}%</div>
            //<Progress value={questionToShow*5}>{questionToShow*5}</Progress>
        )
    }
}

export default TopBar;