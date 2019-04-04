import React , {Component} from 'react';

class Wheather extends Component {
    render(){
        return (
            <div>
              {this.props.city && this.props.country && <p>Location = {this.props.city + " "}  {this.props.country + " "}</p>}
               
               {this.props.temperature && <p>temperature = {this.props.temperature + " "}</p>}
               
               {this.props.humidity && <p>humidity = {this.props.humidity+ " "}</p>}
               
               {this.props.description && <p>description = {this.props.description}</p>}
            </div>
        )
    }
}

export default Wheather;