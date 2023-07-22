import React from 'react';
import './faq.css';

const ListCheck = (props) => {
    if (Array.isArray(props.faqdata.answers[props.index])) {
        return (
            <ul>
                {props.faqdata.answers[props.index].map((e, i) =>
                    <li key={i}><p>{e}</p></li>
                )}
            </ul>
        )
    } else {
        return (
            <p>{props.faqdata.answers[props.index]}</p>
        )
    }
}


function Faq(props) {
    return (
        <div className='wellness__faq'>
            <h2>FAQ</h2>
            {props.faqdata.questions.map((e, i) =>
                <div className='wellness__faq_text' key={i}>
                    <h3>{e}</h3>
                    <ListCheck
                        index={i}
                        faqdata={props.faqdata}
                    />
                </div>
            )}
        </div>
    )
}

export default Faq;