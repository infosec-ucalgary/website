import React from 'react';

interface ResourceCardProps {
    category: string;
    title: string;
    link: string;
    description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ category, title, link, description }) => {
    return (
        <a href={link} className="block bg-like-lavendar bg-opacity-30 rounded-lg p-4 m-2  h-60 w-60" target="_blank" rel="noopener noreferrer">
            <h3 className="text-lg font-bold mb-2 text-lavendar">{title}</h3>
            <p className="text-sm text-like-lavendar mb-2">{category}</p>
            <p className="text-sm mb-4 text-lavendar">{description}</p>
        </a>
    );
};

export default ResourceCard;