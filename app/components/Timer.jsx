import React, {Component} from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
            countdownStatus: 'stopped'
        }    
        this.handleStatusChange = this.handleStatusChange.bind(this);   
        this.startTimer = this.startTimer.bind(this);    
    }

    render() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = ()=>{
            return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
        }

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}></Clock>
                {renderControlArea()}
            </div>
        );
    }
    handleStatusChange(newStatus){
        this.setState({countdownStatus: newStatus});
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
            var newCnt = this.state.count + 1;
            this.setState({
                count: newCnt <= 120 ? newCnt:0
            });
            if(newCnt >= 120){
                this.setState({countdownStatus: 'stopped'});
            }
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }


}

export default Timer;