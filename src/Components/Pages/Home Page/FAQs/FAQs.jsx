import React, { useState } from 'react';
import './FAQs.css';
import arrow from '../../../../images/arrow.svg';

const FAQs = ({data=[]}) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-container" id="FAQ">
      <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3500" data-aos-delay="300">FAQs</h1>
      <div className='flex-container'>
        <div className="column">
          {
            data.slice(0, data.length/2).map((faq,n) => getFAQTemplate(faq,2*n,"left", activeQuestion, toggleAnswer))
          }
        </div>
        <div className="column">
          {
            data.slice(data.length/2).map((faq,n) => getFAQTemplate(faq,(2*n)+1,"right", activeQuestion, toggleAnswer))
          }
        </div>
      </div>
    </div>
  );
}

function getFAQTemplate(faq,i,side, activeQuestion, toggleAnswer) {
  return (
    <div className='faq-block' data-aos={`fade-${side}`} data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="3000"
      data-aos-delay="600" key={i}>
      <div
        className={`question ${activeQuestion === `q${i}` ? 'expanded' : 'collapsed'}`}
        onClick={() => toggleAnswer(`q${i}`)}
      >
        {i+1}: {faq.question}
        <img src={arrow} alt="arrow" />

      </div>
      <div className={`answer ${activeQuestion === `q${i}` ? 'show' : ''}`} id={`q${i}`}>
        {faq.answer}
      </div>
    </div>
  )
}

export default FAQs;
