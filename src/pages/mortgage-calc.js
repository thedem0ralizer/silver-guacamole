import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MortgageCalculator from "../components/calc"
import { Link } from "gatsby"

const MortgageCalculatorPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Seo title="Mortgage" />
            <Link to={`${__PATH_PREFIX__}/`}>Back</Link>
            <MortgageCalculator />
        </Layout>
    )
}

export default MortgageCalculatorPage