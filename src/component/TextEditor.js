import React, { Component } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import BoldMark from './BoldMark';
 

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "My first asd!"
              }
            ]
          }
        ]
      }
    ]
  }
});

class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: initialValue };
  }

  onKeyDown= (e,change) => {
    console.log(e.key)

    if(!e.ctrlKey) {
      return;
    }
    e.preventDefault()

    switch(e.key) {
      case 'b': {
        change.toggleMark('bold');
        return true
      }
    }
  }

  renderMark = props => {
    switch(props.mark.type) {
      case 'bold': 
       return <BoldMark {...props}/>
    }
  }

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Editor value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} renderMark={this.renderMark} />
      </div>
    );
  }
}

TextEditor.propTypes = {};

export default TextEditor;
