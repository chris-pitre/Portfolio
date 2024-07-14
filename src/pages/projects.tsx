import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'

const ProjectPage = () => {
    return (
        <main>
            <Layout pageTitle="Projects">
                <p className='text-4xl mt-16 p-4'>Here are some of my projects:</p>
                <div className='flex flex-row gap-4 p-6 flex-wrap max-w-7xl items-start justify-center'>
                    <Card
                        link="/"
                        title="Final Nail"
                        description="Game made in 1 week for Dungeon Crawler Game Jam 2024. Made with Ryan Pham and Thomas Benfield III. Scored #78/#167."
                        image={require("../img/final_nail.png").default}
                        date="March 2024"
                        github_link='https://github.com/chris-pitre/FinalNail'
                        external_link='https://vextorm.itch.io/final-nail'
                        external_desc='Play'
                    />
                    <Card
                        link="/"
                        title="Mosqit 97"
                        description="Game made in 48 Hours for UNC Charlotte 2024 Spring Game Jam. Scored #6/#13."
                        image={require("../img/mosqit.png").default}
                        date="March 2024"
                        github_link='https://github.com/chris-pitre/Mosqit-97'
                        external_link='https://theeggsandwich.itch.io/mosqit-97'
                        external_desc='Play'
                    />
                    <Card
                        link="/"
                        title="Classifying Veg vs Non-Veg food at Social 704"
                        description="Computer Vision Project to classify vegetarian and non-vegetarian foods at UNC Charlotte's Social 704 dining hall. Made with a group."
                        image={require("../img/social704.jpg").default}
                        date="November-December 2023"
                        github_link='https://github.com/chris-pitre/Veg-vs-Non-Veg-Identification-at-Social-704'
                    />
                    <Card
                        link="/"
                        title="Soundscape"
                        description="Game made for ITCS-4236/5236 Artificial Intelligence for Computer Game at UNC Charlotte. Made with a group."
                        image={require("../img/soundscape.gif").default}
                        date="August-December 2023"
                        github_link='https://github.com/chris-pitre/Soundscape'
                    />
                    <Card
                        link="/"
                        title="Gravel"
                        description="Game made for ITCS-4231/5231 Advanced Game Design and Development at UNC Charlotte. First 3D Unity Game."
                        image={require("../img/gravel.png").default}
                        date="August 2023"
                        github_link='https://github.com/chris-pitre/Gravel'
                    />
                    <Card
                        link="/"
                        title="Dealer's Choice"
                        description="Game made in 48 hours for GMTK Game Jam 2023. Made with Ryan Pham. Scored #414/#6752."
                        image={require("../img/dealers_choice.gif").default}
                        date="July 2023"
                        github_link='https://github.com/chris-pitre/Dealers-Choice'
                        external_link='https://vextorm.itch.io/dealers-choice'
                        external_desc='Play'
                    />
                </div>
            </Layout>
        </main>
    )
}

export const Head = () => <title>Projects</title>

export default ProjectPage
