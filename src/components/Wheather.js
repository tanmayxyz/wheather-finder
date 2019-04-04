import React , {Component} from 'react';

class Wheather extends Component {
    render(){
        return (
            <div>
               temperature = {this.props.temperature}
            </div>
        )
    }
}

export default Wheather;