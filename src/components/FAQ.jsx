import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqs = [
    {
      question: "How much does it cost to transfer money with Kriapay?",
      answer:
        "Kriapay keeps costs low with competitive transaction fees, often up to 50% less than traditional banks and money transfer services, so you can send more and save more.",
    },
    {
      question: "Is my money safe with Kriapay?",
      answer:
        "Absolutely! Kriapay uses cutting-edge encryption, secure servers, and strict compliance protocols to protect your transactions and personal data.",
    },
    {
      question:
        "How long does international money transfers take with Kriapay?",
      answer:
        "Kriapay's fast and efficient network enables most transfers to be processed within 4-5mins, with some curriences arriving even earlier.",
    },
    {
      question: "What kind of support can I expect from Kriapay?",
      answer: "Our dedicated customer support team is available 24/7 via live chat, email or phone to assist with any questions or concerns, ensuring  seamless experience.",
    },
  ];

  return (
    <div className="py-5text-centerw-full flex items-center flex-col gap-[80px] ">
      <h3 className="text-center !text-[30px] md:!text-[40px] lg:!text-[45px] !text-[#072A30] tracking-[-3px] leading-[48px] ">
        Still not convinced? <br /> We’ve got the answers
      </h3>

      <Accordion
  className="w-[85%] md:w-[70%] lg:w-[69%] 2xl:w-[49%] bg-[#F7F7F7] rounded-[20px] overflow-hidden !border-none px-4 py-2"
  activeKey={activeKey}
>
  {faqs.map((item, index) => {
    const isOpen = activeKey === index.toString();
    const isLast = index === faqs.length - 1;

    return (
      // Accordion tab & desktop
      <Accordion.Item
        key={index}
        eventKey={index.toString()}
        className={`${
          isOpen
            ? !isLast
              ? "!border-b-2 !border-[#f1f1f1]"
              : ""
            : !isLast
            ? "!border-b-2 !border-[#f1f1f1]"
            : ""
        }`}
      >
        <Accordion.Header
          onClick={() => handleToggle(index.toString())}
          className={`tracking-[-0.5px] leading-[26px] !text-[#0F1728] relative  md:!py-[5px] md!px-1${
            isOpen ? "border-none" : ""
          }`}
        >
          {item.question}
          <span
            style={{ borderRadius: "20px" }}
            className={`toggle-icon  ${isOpen ? "open" : "closed"}`}
          >
            {isOpen ? "×" : "+"}
          </span>
        </Accordion.Header>

        <Accordion.Body className="!m-0 !p-0 !pb-3 md:!px-4 lg:!px-4 2xl:!px-4 py-3 md:mr-5 !bg-[#F7F7F7] !text-[#475466] font-normal  md:!text-[17px] tracking-[-0.5px] leading-[26px] ">
          {item.answer}
        </Accordion.Body>
      </Accordion.Item>
    );
  })}
</Accordion>


{/* Accordion mobile */}




      <p style={{ fontSize: "18px", marginTop: "104px" }}>
        Still have more questions? Chat with us in-app or email{" "}
        <strong>support@kriapay.com</strong>
      </p>
    </div>
  );
};

export default FAQ;
