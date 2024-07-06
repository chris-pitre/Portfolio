import * as React from 'react'

interface CardProps {
    image?: string;
}

const Card: React.FC<CardProps> = ({image}) => {
    let image_tag;

    if(image){
        image_tag = <img src={image} alt="test img" className={`rounded-t w-full h-auto object-contain`}/>
    } else {
        image_tag = <div className='hidden'></div>
    }

    return (
        <div className='max-w-sm h-auto bg-slate-400 bg-opacity-30 rounded shadow-md'>
            {image_tag}
            <div className='p-6'>
                <h1 className='text-2xl font-bold'>Test Project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod ipsa earum. Maiores, dolores? Nostrum, tempora distinctio similique aliquam quae ut, ipsum commodi laudantium unde veritatis deserunt possimus incidunt! Totam?</p>
            </div>
        </div>
    );
};

export default Card