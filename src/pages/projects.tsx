import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'

const ProjectPage = () => {
    return (
        <main>
            <Layout pageTitle="Projects">
                <p className='text-4xl mt-16 p-4'>Here are some of my projects:</p>
                <div className='flex flex-row gap-4 p-6 flex-wrap max-w-7xl items-start justify-center'>
                    <Card image={require('../img/test.jpg').default}/>
                    <Card />
                    <Card image={require('../img/test2.jpg').default}/>
                    <Card image={require('../img/test.jpg').default}/>
                    <Card image={require('../img/test2.jpg').default}/>
                    <Card />
                    <Card image={require('../img/test.jpg').default}/>
                    <Card />
                </div>
            </Layout>
        </main>
    )
}

export const Head = () => <title>Projects</title>

export default ProjectPage
