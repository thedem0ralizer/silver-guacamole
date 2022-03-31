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
        this.setState({
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
                        <p>
                            Sale price:{' '}
                            <span>
                                {this.state.sale_price}
                            </span>
                        </p>
                        <input
                            name="sale_price"
                            type='range'
                            min='0'
                            max='1000000'
                            step='5000'
                            value={this.state.sale_price}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <p>
                            Down payment:{' '}
                            <span>
                                {this.state.amount_down}
                            </span>
                        </p>
                        <input
                            name="amount_down"
                            type='range'
                            min='0'
                            max='100000'
                            step='1000'
                            value={this.state.amount_down}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <p>
                            Amount to borrow:{' '}
                            <span>
                                {this.state.amount_financed} ({parseInt(this.state.amount_financed) / parseFloat(this.state.sale_price)})
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Interest rate:{' '}
                            <span>
                                {this.state.interest_rate}
                            </span>
                        </p>
                        <input
                            type="number"
                            name="interest_rate"
                            onChange={this.onChange}
                            step='0.1'
                            value={this.state.interest_rate}
                        />
                    </div>
                    <div>
                        <p>
                            Length of loan:{' '}
                            <span>
                                {this.state.num_years}
                            </span>
                        </p>
                        <form>
                            <select value={this.state.num_years} onChange={this.onChange} name="num_years">
                                <option value="15">15</option>
                                <option value="30">30</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <p>
                            Monthly payment:{' '}
                            <span>
                                {this.state.monthly_payment}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MortgageCalculator