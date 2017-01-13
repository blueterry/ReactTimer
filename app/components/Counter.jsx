import React, {Component} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.handleSetCountdown = this.handleSetCountdown.bind(this);

    }
    render() {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}></Clock>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
    handleSetCountdown(seconds){
        this.setState({
            count:seconds
        });
    }
}

export default Counter;