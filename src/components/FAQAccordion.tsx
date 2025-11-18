import {useRef, useState, useEffect} from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

function FAQAccordion({ item, isOpen, onToggle}: FAQAccordionProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<string>('0px');

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        if (isOpen) {
            setHeight(el.scrollHeight + 'px');
        } else {
            setHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className ={"border-b border-lavendar py-4 cursor-pointer"} >
            <div className ={"flex justify-between items-center"} onClick={onToggle}>
                <h3 className ={"font-semibold text-lavendar text-2xl"}>{item.question}</h3>
                <span className={"text-xl text-lavendar"}>{isOpen ? '−' : '+'}</span>
            </div>
            <div className={"text-lavendar"} ref={contentRef} style={{ height, overflow: 'hidden', transition: 'height 0.3s ease' }}>
                <div className={"pt-3"}>{item.answer}</div>
            </div>
        </div>
    );
}

export default FAQAccordion;
