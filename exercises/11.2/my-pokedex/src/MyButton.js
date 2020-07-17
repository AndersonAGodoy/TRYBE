import React from 'react';

function ButtonCreation (text, funcao) {
  return (<button onClick={funcao} value={text} className={text + ' Button'}>{text}</button>)
}

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.funcao} value={this.props.text} className = {this.props.text}>{this.props.text}</button>
    )
  }
}

export default Button;