import React, {Component} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            countdownStatus: 'stopped'
        }
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.startTimer = this.startTimer.bind(this);

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
            count:seconds,
            countdownStatus: 'started'
        });
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                default:
            }
        }
    }
    startTimer(){
        this.timer = setInterval(() =>{
            var newCnt = this.state.count -1;
            this.setState({
                count: newCnt >= 0? newCnt:0
            });
        },1000);
    }
}

export default Counter;