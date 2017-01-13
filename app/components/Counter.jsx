import React, {Component} from 'react';
import Clock from 'Clock';

class Counter extends Component {
    render() {
        return (
            <div>
                <Clock totalSeconds={139}></Clock>
            </div>
        );
    }
}

export default Counter;