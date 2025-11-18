import { useState } from 'react';
import FAQAccordion from '../components/FAQAccordion';

interface FAQItem {
    question: string;
    answer: string;
}


function FAQ() {
  const faqs: FAQItem[] = [
    {
        question: "What is lorem ipsum?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
    },
    {
        question: "Why do we use it?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc. Nunc lobortis dui neque quis."
    },
    {
        question: "Where does it come from?",
        answer: "Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est."
    },
    {
        question: "Can I use Lorem Ipsum for my project?",
        answer: "Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere."
    },
    {
        question: "Is there a standard chunk of Lorem Ipsum?",
        answer: "Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis."
    },
    {
        question: "Where can I get some?",
        answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum."
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2 className={"text-4xl text-center text-lavendar font-bold mb-4"}>Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <FAQAccordion
          key={i}
          item={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

export default FAQ;