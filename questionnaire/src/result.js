function Result(scores){
    const languageScores = scores.scores;
    // array of object with info for each language
    const resources = [
        {
            language: "Python",
            purpose: "Python is a versatile, high-level programming language known for its simplicity and readability. It's used for web development, data analysis, artificial intelligence, machine learning, scientific computing, automation, and more. Its syntax allows developers to write clear, concise code, making it a popular choice for beginners and professionals alike.",
            resources: [
                { 
                    name: "CodeCombat",
                    description: "A platform where you can learn Python (and other languages) by playing a game, solving challenges, and writing code to control characters in a fantasy world.",
                    link: "https://codecombat.com/"
                },
                { 
                    name: "CheckiO",
                    description: "An interactive game platform with Python challenges. Solve missions, improve your skills, and compete with others.",
                    link: "https://checkio.org/"
                },
                { 
                    name: "Python Challenge",
                    description: "A puzzle-based game where you progress by solving Python-related riddles. Each level unlocks the next challenge.",
                    link: "http://www.pythonchallenge.com/"
                },
                { 
                    name: "Codewars",
                    description: "Offers coding challenges in various languages, including Python. Solve problems to advance and improve your coding skills.",
                    link: "https://www.codewars.com/"
                },
                { 
                    name: "PyBites",
                    description: "Provides Python challenges and exercises for skill improvement, covering different levels of difficulty.",
                    link: "https://pybit.es/"
                }
            ],
            projects: [
                "Weather App",
                "To-Do List Manager",
                "Web Scraper",
                "Simple Game",
                "Personal Portfolio Website Generator"
            ]
        },
        {
            language: "JavaScript",
            purpose: "JavaScript is primarily used for building interactive and dynamic web pages. It's a scripting language that runs on web browsers and allows developers to create client-side functionalities, handle events, manipulate HTML/CSS, and build web applications. It's also used in server-side development (Node.js) and game development.",
            resources: [
                { 
                    name: "Codecademy",
                    description: "Offers interactive JavaScript lessons and projects for beginners, allowing you to write and test code in a browser-based environment.",
                    link: "https://www.codecademy.com/learn/introduction-to-javascript"
                },
                { 
                    name: "Elevator Saga",
                    description: "A game where you write JavaScript code to control elevators and solve increasingly complex challenges.",
                    link: "https://play.elevatorsaga.com/"
                },
                { 
                    name: "CodeCombat",
                    description: "Teaches JavaScript along with other languages in a game setting, letting you control characters using code.",
                    link: "https://codecombat.com/"
                },
                { 
                    name: "JavaScript30",
                    description: "A 30-day challenge with small projects aimed at improving JavaScript skills by building various applications.",
                    link: "https://javascript30.com/"
                },
                { 
                    name: "Untrusted",
                    description: "A game that requires you to modify JavaScript code to solve puzzles and advance through levels.",
                    link: "https://alexnisnevich.github.io/untrusted/"
                }
            ],
            projects: [
                "Interactive Quiz App",
                "To-Do List App",
                "Weather Forecast Web App",
                "Interactive Image Gallery",
                "Real-Time Chat Application"
            ]
        },
        {
            language: "C#",
            purpose: "C# (pronounced as 'C sharp') is a powerful, object-oriented programming language developed by Microsoft. It's commonly used for developing Windows applications, games using Unity, web applications, and enterprise-level software. It's known for its ease of use, scalability, and robustness in creating diverse software solutions.",
            resources: [
                { 
                    name: "Unity Learn",
                    description: "Offers tutorials and interactive lessons for C# within the context of game development using Unity, a popular game engine.",
                    link: "https://learn.unity.com/"
                },
                { 
                    name: "SoloLearn",
                    description: "Provides a C# course with quizzes, challenges, and a community to help beginners learn C#.",
                    link: "https://www.sololearn.com/Course/CSharp/"
                },
                { 
                    name: "Codingame",
                    description: "A platform with challenges and multiplayer games where you use C# to solve problems and improve your coding skills.",
                    link: "https://www.codingame.com/"
                },
                { 
                    name: "Exercism.io",
                    description: "Offers coding exercises and mentor-guided learning for C#. You solve problems and get feedback from mentors.",
                    link: "https://exercism.io/tracks/csharp"
                },
                { 
                    name: "C# Yellow Book by Rob Miles",
                    description: "A free book providing a fun and accessible approach to learning C# programming.",
                    link: "https://www.robmiles.com/s/CSharp-Book-2021-1.00.pdf"
                }
            ],
            projects: [
                "Simple Calculator",
                "Inventory Management System",
                "Personal Finance Manager",
                "Text-Based RPG Game",
                "Task Scheduler"
            ]
        },
        {
            language: "SQL",
            purpose: "SQL (Structured Query Language) is a domain-specific language designed for managing and manipulating relational databases. It's used to perform various operations on databases like querying data, inserting, updating, deleting records, creating and modifying tables, and defining relationships between them. SQL is vital in handling data in almost all software applications.",
            resources: [
                { 
                    name: "SQLZoo",
                    description: "Interactive SQL tutorials with a range of difficulty levels.",
                    link: "https://sqlzoo.net/"
                },
                { 
                    name: "HackerRank",
                    description: "Platform offering SQL challenges and contests to practice SQL queries.",
                    link: "https://www.hackerrank.com/domains/tutorials/10-days-of-sql"
                },
                { 
                    name: "Mode Analytics SQL Tutorial",
                    description: "Teaches SQL through interactive lessons and exercises.",
                    link: "https://mode.com/sql-tutorial/"
                },
                { 
                    name: "LeetCode",
                    description: "Provides SQL problems to solve in a gamified environment.",
                    link: "https://leetcode.com/problemset/database/"
                },
                { 
                    name: "SQL Fiddle",
                    description: "Allows practicing SQL in a sandbox environment with various database systems.",
                    link: "http://sqlfiddle.com/"
                }
            ],
            projects: [
                "Online Library Database",
                "Employee Management System",
                "Healthcare Management System",
                "E-commerce Database",
                "Social Media Analytics"
            ]
        },
        {
            language: "HTML",
            purpose:"HTML (Hypertext Markup Language) forms the backbone of web pages, providing the structure and content. It uses various tags to define elements like text, images, links, forms, and more. CSS (Cascading Style Sheets) complements HTML by adding style and design, controlling the layout, appearance, and presentation of HTML elements. CSS allows developers to customize colors, fonts, spacing, and create responsive designs for different devices. Together, HTML and CSS are fundamental languages for creating visually appealing and well-structured web pages and applications. They work in tandem, with HTML defining the content and structure, while CSS defines the visual style and layout.",
            resources: [
                { 
                    name: "Codecademy",
                    description: "Interactive lessons on HTML for building web pages.",
                    link: "https://www.codecademy.com/learn/learn-html"
                },
                { 
                    name: "Mozilla Developer Network (MDN) Web Docs",
                    description: "Comprehensive tutorials and references for HTML.",
                    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                },
                { 
                    name: "FreeCodeCamp",
                    description: "Offers projects and challenges for learning HTML and other web technologies.",
                    link: "https://www.freecodecamp.org/learn/"
                },
                { 
                    name: "w3schools",
                    description: "Interactive tutorials and examples for HTML, CSS, and other web technologies.",
                    link: "https://www.w3schools.com/html/"
                },
                { 
                    name: "HTML Dog",
                    description: "Provides tutorials and exercises to learn HTML step by step.",
                    link: "https://htmldog.com/"
                }
            ],
            projects: [
                "Personal Portfolio Website",
                "Recipe Book Website",
                "Blog Site",
                "Event Countdown Page",
                "Online Resume"
            ]
        }
        ];

    // initalize compare variable
    let topScore = 0;

    // Find Top Result
    languageScores.forEach(score => {
        if(topScore < score){
            topScore = score;
            
        } else{
            topScore = topScore;
        }
    })

    // find the index of the top score
    let topLanguageIndex = languageScores.indexOf(topScore);

    // page coontent decider
    switch(topLanguageIndex){
        case 0:
            console.log("Resources for Python:");
            resources.find(lang => lang.language === "Python").resources.forEach(resource => {
                console.log(`${resource.name}: ${resource.description} [Link: ${resource.link}]`);
            });
            break;
            
        case 1:
            console.log("Resources for C#:");
            resources.find(lang => lang.language === "Python").resources.forEach(resource => {
                console.log(`${resource.name}: ${resource.description} [Link: ${resource.link}]`);
            });
            break;
        case 2:
            console.log("Resources for JavaScript:");
            resources.find(lang => lang.language === "Python").resources.forEach(resource => {
                console.log(`${resource.name}: ${resource.description} [Link: ${resource.link}]`);
            });
            break;
        case 3:
            console.log("Resources for SQL:");
            resources.find(lang => lang.language === "Python").resources.forEach(resource => {
                console.log(`${resource.name}: ${resource.description} [Link: ${resource.link}]`);
            });
            break;
        case 4:
            console.log("Resources for HTML & CSS:");
            resources.find(lang => lang.language === "Python").resources.forEach(resource => {
                console.log(`${resource.name}: ${resource.description} [Link: ${resource.link}]`);
            });
            break;
        
    }

    
}

export {Result}