import React, {Component, PropTypes} from 'react';

class Controls extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     count:0,
        //     countdownStatus: 'stopped'
        // }
        // this.handleSetCountdown = this.handleSetCountdown.bind(this);
        // this.componentDidUpdate = this.componentDidUpdate.bind(this);
        // this.startTimer = this.startTimer.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);

    }
    render() {
        var {countdownStatus} =this.props;
        var renderStartStopButton = ()=>{
            if(countdownStatus === 'started'){
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>

            }else if(countdownStatus === 'paused' || countdownStatus === "stopped"){
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>            
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
    onStatusChange(newStatus){
        return ()=>{
            this.props.onStatusChange(newStatus);
        }
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;