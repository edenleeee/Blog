import React, { Component } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import { BoldMark, ItalicMark } from "./index";

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

  onKeyDown = (e, change) => {
    console.log(e.key);

    if (!e.ctrlKey) {
      return;
    }
    e.preventDefault();

    switch (e.key) {
      case "b": {
        change.toggleMark("bold");
        return true;
      }

      case "i": {
        change.toggleMark("italic");
        return true;
      }

      case "Enter" : {
        this.props.onSavePost(this.state.value);
        return ;
      }
        
      default :
        return;
    }
  };

  renderMark = props => {
    switch (props.mark.type) {
      case "bold":
        return <BoldMark {...props} />;
      case "italic":
        return <ItalicMark {...props} />;
      default:
        return;
    }
  };

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderMark={this.renderMark}
        />
      </div>
    );
  }
}

  
  
export default TextEditor
