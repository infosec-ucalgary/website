import React, { useRef } from "react";

interface WriteupCardProps {
    category: string;
    title: string;
    author: string;
    link: () => void;
    description: string;
}

const WriteupCard: React.FC<WriteupCardProps> = ({
    category,
    title,
    author,
    link,
    description,
}) => {
    const cardRef = useRef<HTMLAnchorElement | null>(null);

    return (
        <a
            onClick={link}
            className="relative block bg-like-lavendar bg-opacity-30 rounded-lg p-4 h-60 w-full overflow-hidden group cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            ref={cardRef}
            data-aos="fade-up"
        >
            <h2 className="text-lg font-bold mb-2 text-lavendar">{title}</h2>
            <div className="absolute top-6 right-8">
                <p className="text-sm text-like-lavendar font-bold">{category}</p>
            </div>
            <div className=" absolute bottom-6 right-8">
                <p className="text-sm text-gray-300 font-bold">By {author}</p>
            </div>
            <p className="text-lg mb-4 text-lavendar">{description}</p>

            {/* Glare Effect */}
            <div className="absolute inset-0 pointer-events-none rounded-lg opacity-0 bg-white/30 transform scale-150 rotate-45 transition-all duration-700 group-hover:opacity-30 group-hover:scale-100 group-hover:translate-x-full"></div>
        </a>
    );
};

export default WriteupCard;

