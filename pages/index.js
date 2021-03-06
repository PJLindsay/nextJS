import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

class IndexPage extends Component {

  /**
   * lifecycle method that executes on server
   * getInitialProps allows you to setup props before page is loaded
   *
   * setup properties
   *
   * @param {*} context
   */
  static async getInitialProps (context) {
    // typically you would have await in here to call server (e.g. via axios)

    // simulated server call
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" })
      }, 1000)
    })

    return promise
  }

  render () {
    return (
      <div>
        <h1>The Main Page of '{this.props.appName}'</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    )
  }
}

export default IndexPage