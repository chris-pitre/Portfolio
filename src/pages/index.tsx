// Importing React
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <h1 className='text-5xl'>Welcome to my Portfolio!</h1>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage