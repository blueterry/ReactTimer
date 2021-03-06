import React, {Component} from 'react';

class Clock extends Component {
    render() {
        var {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
    formatSeconds(totalSeconds){
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);

        if(seconds < 10){
            seconds = '0' + seconds;
        }
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        return minutes + ":" + seconds;
    }    
}
Clock.propTypes = {
    totalSeconds: React.PropTypes.number
};

Clock.defaultProps={
    totalSeconds: 0
};

export default Clock;


