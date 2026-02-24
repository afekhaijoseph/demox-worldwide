import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="rounded">
      <button
        onClick={onClick}
        className="w-full text-left p-4 font-semibold bg-secondary shadow-md hover:bg-darkBackground hover:text-secondary"
      >
        {title}
      </button>

      {isOpen && (
        <div className="p-4 bg-lightBackground">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "What products do you export?", content: "We export premium agricultural products including cocoa, cashew, sesame, ginger, and other high-demand commodities." },
    { title: "What is the minimum order quantity (MOQ)?", content: "MOQ varies by product and destination. Contact us with your requirements for a tailored quote." },
    { title: "Which countries do you export to?", content: "We serve buyers worldwide, including Europe, Asia, the Middle East, and beyond." },
    { title: "Can you provide product samples?", content: "Yes — samples can be arranged to verify quality and specifications before ordering." },
    { title: "What are your payment terms?", content: "Payment terms are clearly outlined in the contract to ensure security and transparency for both parties." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;