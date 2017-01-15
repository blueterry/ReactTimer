import React, {Component} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

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
        this.handleStatusChange = this.handleStatusChange.bind(this);

    }
    render() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = ()=>{
            if(countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} onstatusChange={this.handleSetCountdown}/>
            }

        }
        return (
            <div>
                <Clock totalSeconds={count}></Clock>
                {renderControlArea()}
            </div>
        );
    }
    handleStatusChange(newStatus){
        this.setState({countdownStatus: newStatus});
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
                case 'stopped':
                    this.setState({count:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                default:
                    break;
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