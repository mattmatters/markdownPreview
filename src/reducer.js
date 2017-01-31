import marked from 'marked';
import { HANDLE_INPUT_CHANGE } from './actions';

const markedConfig = {
  breaks: true,
};

const markdownReducer = (state = { compiledMarkDown: '' }, action) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return Object.assign({}, state, {
        compiledMarkDown: marked(action.input, markedConfig),
      });
    default:
      return state;
  }
};

export default markdownReducer;
