import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm',() => {
    it('should Exist', () => {
        expect(CountdownForm).toExist();    
    });

    it('should call onSetcountdown if a vlid seconds entered', () => {
        var theSpy = expect.createSpy();
        //console.log('spy',theSpy);
        
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={theSpy}/>);
        //console.log('Countdownform',countdownForm);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(theSpy).toHaveBeenCalledWith(109);
    });

    it('should NOT call onSetcountdown if a invlid seconds entered', () => {
        var theSpy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={theSpy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'a109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(theSpy).toNotHaveBeenCalled();
    });
});
