import React, { Component } from 'react'

export class Splitter extends Component {

  render() {
    return (
      <div>
        <p className="pink"
         style={{fontSize: '30px', fontWeight: '400', letterSpacing: '4px', textAlign: 'center', lineHeight: '20px', marginBottom: '20px', ...this.props.style}}>+++++++++++++++++++</p>
      </div>
    )
  }
}


export default Splitter
