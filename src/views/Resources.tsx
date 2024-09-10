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
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 gap-y-4">
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