import React, { Component } from 'react'

class Example extends Component {
  render() {
    return <Card       
      style={{
        backgroundColor: 'red',
        width: '450px',
        height: '300px',
        cursor: 'pointer'
      }}
      onClick={() => console.log('Card clicked')}
    />
  }
}