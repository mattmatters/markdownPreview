/* eslint-disable import/no-extraneous-dependencies,
   no-unused-expressions, react/jsx-filename-extension */
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { should } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
// import { mapStateToProps } from '../src/containers/UserListContainer';
import markdownReducer from '../src/reducer';
import { handleInputChange, HANDLE_INPUT_CHANGE } from '../src/actions';

should();
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
*/

// Actions
describe('Actions', () => {
  it('should return appendChar action', () => {
    handleInputChange('# Poop').should.be.deep.equal({
      type: HANDLE_INPUT_CHANGE,
      input: '# Poop',
    });
  });
});

const initialState = {
  compiledMarkDown: '',
};

// Reducers
describe('Reducers', () => {
  describe('markdownReducer', () => {
    it('should initialize empty', () => {
      markdownReducer(undefined, 'INIT').should.be.deep.equal(initialState);
    });
    it('should return html of given markdown', () => {
      markdownReducer(initialState, handleInputChange('# Poop')).should.be.deep.equal({ compiledMarkDown: marked('# Poop') });
    });
  });
});

/*
// Components
describe('Components', () => {
  describe('User', () => {
    const wrapper = shallow(<User username="poop" lastupdate="never" allTime={23} recent={2} />);
    it('renders without exploding', () => {
      wrapper.should.have.length(1);
    });
  });
});


// Containers
describe('Containers', () => {
  describe('appContainer', () => {
    it('should map props', () => {
      mapStateToProps({ mooReducer: { cowText: '' } }).should.be.deep.equal({ text: '' });
    });
  });
});

*/
