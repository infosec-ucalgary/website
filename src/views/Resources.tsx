import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { resources } from '../data/ResourcesData';
import ResourceCard from '../components/ResourceCard';

function Resources() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-5 w-full">
            <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center w-full">
                    {resources.map((resource, index) => (
                        <div key={index} data-aos="fade-up">
                            <ResourceCard
                                category={resource.category}
                                title={resource.title}
                                link={resource.link}
                                description={resource.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resources;