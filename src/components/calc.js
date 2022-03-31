import React, { Component } from "react"

export class MortgageCalculator extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sale_price: 250000,
            amount_down: 50000,
            interest_rate: 3.5,
            num_years: 15,
            monthly_payment: 0,
            amount_financed: 0,
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange (event) {
        console.log(`onChange`)
        console.log(event)
        event.preventDefault()
        const rate = this.state.interest_rate / 1200
        const num_payments = this.state.num_years * 12
        const payment = this.state.amount_financed * ( rate * (1 + rate) ** num_payments ) / ( (1 + rate) ** num_payments - 1 )
        this.setState({
            monthly_payment: payment,
            amount_financed: this.state.sale_price - this.state.amount_down,
            [event.target.name]: event.target.value
        })
    }



    render () {
        return (
            <div>
                <h3>Mortgage Calculator</h3>
                <div>
                    <div>
                        <input
                            name="sale_price"
                            type='range'
                            min='100001'
                            max='1005033'
                            step='5033'
                            value={this.state.sale_price}
                            onChange={this.onChange}
                        />
                        <p>
                            Sale price:{' '}
                            <span>
                                ${this.state.sale_price}
                            </span>
                        </p>
                    </div>
                    <div>
                        <input
                            name="amount_down"
                            type='range'
                            min='0'
                            max='100000'
                            step='1000'
                            value={this.state.amount_down}
                            onChange={this.onChange}
                        />
                        <p>
                            Down payment:{' '}
                            <span>
                                ${this.state.amount_down} ({(parseInt(this.state.amount_down) / parseFloat(this.state.sale_price) * 100).toFixed()}%)
                            </span>
                        </p>
                    </div>
                    <div>
                        <input
                            type="number"
                            name="interest_rate"
                            onChange={this.onChange}
                            step='0.1'
                            value={this.state.interest_rate}
                        />%
                        <p>
                            Interest rate:{' '}
                            <span>
                                {this.state.interest_rate}%
                            </span>
                        </p>
                    </div>
                    <div>
                        <form>
                            <select value={this.state.num_years} onChange={this.onChange} name="num_years">
                                <option value="15">15</option>
                                <option value="30">30</option>
                            </select>
                        </form>
                        <p>
                            Length of loan:{' '}
                            <span>
                                {this.state.num_years} years
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Monthly payment:{' '}
                            <span>
                                ${this.state.monthly_payment.toFixed(2)}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MortgageCalculator