import * as React from 'react'
import Layout from '../components/layout'

const ProjectPage = () => {
    return (
        <main>
            <Layout pageTitle="Projects">
                <p className='text-5xl mx-10'>here are some projects</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>Projects</title>

export default ProjectPage
