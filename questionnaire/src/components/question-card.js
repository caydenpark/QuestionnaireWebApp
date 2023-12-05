import React from "react";


function Question(id, question, a1, a2, a3, a4){

    // const handleClick = () => {
    //     handleNextButton()
    // }
    return (
        <body>
        <div class="container">
            <h1>{id}</h1>
            <h3>{question}</h3>
            <input type="radio"/>
            <label htmlFor="noXP">{a1}</label>
            <br />
            <input type="radio"/>
            <label htmlFor="someXP">{a2}</label>
            <br />
            <input type="radio"/>
            <label htmlFor="hobbyXP">{a3}</label>
            <br />
            <input type="radio"/>
            <label htmlFor="engineerXP">{a4}</label>
            <br/>
            <button type='button' class="nextButton">Next Question</button>
        </div>
        </body>
      );
}

export default Question;