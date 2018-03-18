import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="demo">
                <h2>zhangyi webpack4 demo 22</h2>
                <div className='home'>
                    <img src={require('./assets/img/sun.jpeg')} alt=""/>
                </div>
            </div>
        )
    }
}