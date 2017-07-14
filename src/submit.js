import React from 'react';

class Submit extends React.Component {
    constructor(props){
        super(props);
        this.setSail=this.setSail.bind(this);
    }
    setSail(){
        console.log('Setting sail');
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Submit</h1>
                <button onClick={this.setSail}>submit</button>
            </div>
        )
    }
}
export default Submit;