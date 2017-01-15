import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Counter from 'Counter';


describe('Countdown',()=>{
    it('Should exist',()=>{
        expect(Counter).toExist();
    });
    describe('handleSetCountdown',()=>{
        it('Should set State to Started to Countdown',(done)=>{
            var cdown = TestUtils.renderIntoDocument(<Counter/>);
            cdown.handleSetCountdown(10);

            expect(cdown.state.count).toBe(10);
            expect(cdown.state.countdownStatus).toBe('started');

            setTimeout(()=>{
                expect(cdown.state.count).toBe(9);
                done();
            },1001);
        });

        it('Should be no less than zero',(done)=>{
            var cdown = TestUtils.renderIntoDocument(<Counter/>);
            cdown.handleSetCountdown(1);

            expect(cdown.state.count).toBe(1);
            
            setTimeout(()=>{
                expect(cdown.state.count).toBe(0);
                done();
            },3003);
        });
        it('should pause countdown on paused status',(done)=>{
            var cdn = TestUtils.renderIntoDocument(<Counter />);
            cdn.handleSetCountdown(3);
            cdn.handleStatusChange('paused');
            setTimeout(()=>{
                expect(cdn.state.count).toBe(3);
                expect(cdn.state.countdownStatus).toBe('paused');
                done();
            },1001);
        });
        it('should reset count on stop status',(done)=>{
            var cdn = TestUtils.renderIntoDocument(<Counter />);
            cdn.handleSetCountdown(3);
            cdn.handleStatusChange('stopped');
            setTimeout(()=>{
                expect(cdn.state.count).toBe(0);
                expect(cdn.state.countdownStatus).toBe('stopped');
                done();
            },1001);
        });
    });
});