import './index.css';
import React, { useState } from 'react';

const Result = ({language}) => {
    const language = useState(null);

    const langOptions = [
        "Python",
        "JavaScript",
        "C#",
        "SQL",
        "HTML"
    ]

    const resources = {
        "Python": 
    }

    return(
        <main>
            <h1>{language}</h1>

        </main>
    )

}
