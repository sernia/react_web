import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'))