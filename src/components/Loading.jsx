import React, { Component } from 'react'


export default class Loading extends Component {
  render() {
    return (
    <div className='container text-center my-3'>
      <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span className="sr-only">Pls Wait</span>
</button>
    </div>
    )
  }
}
