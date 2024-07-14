import * as React from 'react'
import { Link } from 'gatsby'

interface CardProps {
    image?: string;
    title: string;
    description: string;
    link: string;
    date: string;
    github_link?: string;
    external_link?: string;
    external_desc?: string;
}

const Card: React.FC<CardProps> = ({image, title, description, link, date, github_link, external_link, external_desc}) => {
    let image_tag, github_button, external_button;

    if(image){
        image_tag = <img src={image} alt="test img" className={`rounded-t w-full h-auto object-cover`}/>
    } else {
        image_tag = <div className='hidden'></div>
    }

    if(github_link){
        github_button = <Link to={github_link} className={`bg-rose-900 mx-4 py-2 px-4 text-white rounded bg-opacity-50 text-center hover:bg-rose-700`}>Github</Link>
    } else {
        github_button = <div className='hidden'></div>
    }

    if(external_link){
        if (!external_desc){
            external_desc = "Live App"
        }
        external_button = <Link to={external_link} className={`bg-rose-900 mx-4 py-2 px-4 text-white rounded bg-opacity-50 text-center hover:bg-rose-700`}>{external_desc}</Link>
    } else {
        external_button = <div className='hidden'></div>
    }

    return (
        <div className='group max-w-sm h-auto bg-slate-400 bg-opacity-30 overflow-hidden rounded shadow-md transition-all hover:scale-105'>
            {image_tag}
            <div className='p-6 block'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-sm'>{date}</p>
                <p className='text-md'>{description}</p>
                <ul className="list-none mt-4 flex flex-col space-y-2">
                    <Link to={link} className={`bg-rose-900 mx-4 py-2 px-4 text-white rounded bg-opacity-50 text-center hover:bg-rose-700`}>Read More</Link>
                    {github_button}
                    {external_button}
                </ul>
            </div>
        </div>
    );
};

export default Card