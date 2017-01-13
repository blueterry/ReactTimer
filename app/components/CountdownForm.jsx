import React, {Component} from 'react';

class CountdownForm extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this); //need bind 
    }
    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="input secondes you want."/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
    //onSubmit=(e)=>{ //no need bind up, but in test phase.
    onSubmit(e){
        e.preventDefault();
        var strSec = this.refs.seconds.value;

        if(strSec.match(/^[0-9]*$/)){
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSec, 10));
        }
    }
}

export default CountdownForm;