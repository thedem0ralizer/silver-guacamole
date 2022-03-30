import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MortgageCalculator from "../components/calc"

const MortgageCalculatorPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Seo title="Mortgage" />
            <MortgageCalculator />
        </Layout>
    )
}

export default MortgageCalculatorPage