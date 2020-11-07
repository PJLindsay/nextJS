import React from 'react'

import User from '../../components/User'

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Max" age={28} />
  </div>
)

/**
 * getInitialProps allows you to setup props before page is loaded
 * you can call out to server to get data (this is async lifecycle method)
 */
authIndexPage.getInitialProps = context => {
    // simulated server call
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App (Auth)" })
      }, 1000)
    })
    return promise
}

export default authIndexPage