import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { resources } from '../data/ResourcesData';
import DocCard from '../components/DocCard';

function Docs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-5 w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-4 w-11/12 mx-auto">
                    {resources.map((resource, index) => (
                        <div key={index} data-aos="fade-up" className="w-full">
                            <DocCard
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

export default Docs;