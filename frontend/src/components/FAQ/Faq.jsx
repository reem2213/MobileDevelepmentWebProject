import { useState } from "react";
import classes from './Faq.module.css'
const Faq = () => {
  

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    
    <div className={classes.wrapper}>
      <div className={classes.accordion}>
        {data.map((item, i) => (
            <>
            <div className={classes.item}>
            <div className={classes.titlee} onClick={() => toggle(i)}>
              <p className={classes.question}>{item.question}</p>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={`${classes.content} ${selected === i ? classes.show : ''}`}>
              {item.answer}
            </div>
          </div>
            </>
          
        ))}
      </div>
    </div>
  );
};
const data = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), debit cards, and select digital wallets.",
    },
    {
      question: "Can I make changes to my booking after it's confirmed?",
      answer: "Yes, you can make changes to your booking in certain cases. However, please note that changes may be subject to fees and availability.Contact Us!",
    },
    {
      question: "What is your cancellation policy",
      answer: "Our cancellation policy varies depending on the type of booking and the fare class. Generally, flexible fares allow for easier cancellations with a refund, while non-refundable fares may have more restrictions",
    },
    
    {
      question: "How do I retrieve my booking confirmation and e-tickets?",
      answer: "Once your booking is confirmed, you'll receive a confirmation email containing your booking details and e-ticket information.",
    }
    ,
    {
      question: "What should I do in case of an emergency during my trip?",
      answer: " In case of emergencies, please refer to the emergency contact information provided in your booking confirmation. Additionally, our customer support team is available 24/7 to assist you. ",
    },
  ];

export default Faq;
