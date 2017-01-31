import React, { PropTypes } from 'react';

const propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  compiledMarkDown: PropTypes.string.isRequired,
};

const App = ({ handleInputChange, compiledMarkDown }) => (
  <div className="app container">
    <h1 className="text-center"> Markdown Preview </h1>
    <div className="row">
      <div className="col-sm-6">
        <h3 className="text-center"> Input </h3>
        <textarea
          id="markdown-input"
          type="text"
          onInput={() => handleInputChange(document.getElementById('markdown-input').value)}
        />
      </div>
      <div className="col-sm-6">
        <h3 className="text-center"> HTML Output </h3>
        {compiledMarkDown}
      </div>
    </div>
  </div>
);

App.propTypes = propTypes;

export default App;
