import React from 'react';
import ReactDOM from 'react-dom';

function Structure() {
    return(
        <main>
            <section id="Intro">
                <div>We Suggest the language:</div>
                <section>
                    <h1 id="languageTitle"></h1>
                    <article>
                        <img/>
                        <p></p>
                    </article>
                </section>
            </section>

            <div id="resources">
                <section>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <div>
                    <img/>
                    <img/>
                </div>
            </div>
        </main>
    )
}

export {Structure};