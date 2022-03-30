import React, { Component } from "react"

export class MortgageCalculator extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.onChange = this.onChange.bind(this)
    }

    onChange (event) {
        console.log(`onChange; event: ${event.toString()}`)
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            "mortgage calc herre"
        )
    }
}

export default MortgageCalculator