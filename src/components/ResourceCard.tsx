import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface ResourceCardProps {
    category: string;
    title: string;
    link: string;
    description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ category, title, link, description }) => {
    const cardRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (cardRef.current) {
            VanillaTilt.init(cardRef.current, {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
            });
        }
    }, []);

    return (
        <a
            href={link}
            className="block bg-like-lavendar bg-opacity-30 rounded-lg p-4 m-2 h-60 w-60"
            target="_blank"
            rel="noopener noreferrer"
            ref={cardRef}
        >
            <h3 className="text-lg font-bold mb-2 text-lavendar">{title}</h3>
            <p className="text-sm text-like-lavendar mb-2">{category}</p>
            <p className="text-sm mb-4 text-lavendar">{description}</p>
        </a>
    );
};

export default ResourceCard;