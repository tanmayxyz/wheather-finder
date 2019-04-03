import React , {Component} from 'react';

class Form extends Component {
    render(){
        return (
            <form onSubmit={this.props.getWheather}>
                <input type="text" name="city" placeholder="enter city" />
                <input type="text" name="country" placeholder="enter country" />
                <button>Get Wheather</button>
            </form>

        )
    }
}

export default Form;