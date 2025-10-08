import React from "react";
//import OfficesByState from "./components/OfficesByState";
//import CompaniesByYear from "./components/CompaniesByYear";
//import FoundingYearChart from "./components/FoundingYearChart";
//import StateBarChart from "./components/StateBarChart";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Christian Hart Portfolio</h1>
      <div className="section">
        <h2>👤 Professional Self-Assessment</h2>
        <p>
          As I wrap up my Computer Science degree, I’m looking ahead to joining a small, focused development team where I can contribute meaningfully and continue growing. I’m not particularly interested in freelancing—though I’m open to the idea if the right opportunity came along. What I really want is to be part of a collaborative group—five to ten people—solving problems together, building reliable software, and learning from each other.
          </p>
          <p>
            One of the biggest strengths I’m bringing out of this program is perseverance. There were times I felt stuck or overwhelmed, but I kept working through it...
            
            </p>
          <p>
            One of the things that really surprised me during this program was how simple processes—small pieces of logic or data—can work together to create something much more complex. I knew that in theory before, but it hit differently once I started building real code. There’s something really cool about seeing that click into place.
          </p>
          <p>
            I came into this degree very unsure of my abilities. I doubted whether I had what it took to succeed in programming. Now, after all the coursework and challenges, I feel confident. I’ve learned how to face unfamiliar problems and find solutions. Even if I don’t know something right away, I know how to learn it. I’ve also discovered that I enjoy the challenges of full-stack development and AI. Both were difficult subjects, but they kept me engaged and pushed me to think differently.
          </p>
          <p>
            Over the course of this degree, I’ve built a solid foundation across the core areas of computer science—from working with data structures and algorithms to building full-stack applications. I’ve learned how to write code that’s not just functional, but also maintainable and scalable. My coursework emphasized clean design, modularity, and efficient problem-solving, and I’ve applied those principles to each artifact in this portfolio.
          </p>
          <p>
            Communication and collaboration have also been key takeaways. While my coding projects were often solo efforts, I’ve had real-world experience leading teams of 15 or more people in retail management roles. That taught me how to coordinate efforts, resolve conflict, and motivate others—skills I know translate directly into a development team environment. I value clear communication, and I’ve learned how important it is when discussing technical ideas with teammates or explaining decisions to non-technical stakeholders.
          </p>
          <p>
            I’ve also built a strong understanding of database management, API integration, and full-stack development—especially through my work on the Company Offices App. In every project, I try to think critically about security as well: validating inputs, anticipating misuse, and ensuring that my designs are resilient rather than fragile.
          </p>
          <p>
            The artifacts in this portfolio represent growth in three core areas of computer science: software design, algorithms and data structures, and databases. Each one was selected intentionally—not just to check boxes, but because they challenged me in meaningful ways and gave me a chance to demonstrate what I’ve learned.

          </p>
          <p>- Treasure Hunt Game: This project generates a maze that is then solved by an AI agent. For my capstone enhancement, I implemented a custom guidance algorithm to help the AI learn more efficiently. This demonstrates my understanding of AI behavior, reinforcement learning principles, and algorithm design, as well as the ability to develop heuristics and intelligent pathfinding strategies.
          </p>
          <p>
            - Histogram Project: This artifact demonstrates my understanding of data structures and algorithms, with both CLI and GUI implementations that analyze and visualize text data.

          </p>
          <p>
            - Company Offices App: Built with React and MongoDB-style structures, this full-stack dashboard showcases my ability to work with databases, APIs, and front-end visualization in a cohesive web project.

          </p>
          <p>
            Together, these projects reflect a well-rounded skill set—and more importantly, they prove that I can approach problems from design to implementation and see them through.

          </p>
          <p>
            Putting this portfolio together has shown me just how far I’ve come. I started this program unsure of what I could accomplish, but now I’ve completed real projects, solved real problems, and built tools I’m proud of. I’m confident in my ability to contribute to a development team, learn new technologies as needed, and stay adaptable in a constantly changing field.

          </p>
          <p>
            I look forward to the opportunities that earning this degree will provide me. While this period of change has been difficult at times, I’ve come to understand that real growth only happens through discomfort—and I’m ready for what comes next.

          </p>

      </div>


      {/* 📹 Section: Code Review Video */}
      <div className="section">
        <h2>📹 Capstone Code Review Video</h2>
        <p>This video walks through the original functionality of my artifact, outlines areas for improvement, and explains my enhancement plans.</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/2M2WEjkR7k0" 
            title="CS499 Capstone Code Review" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

       {/* 🌐 Section: Additional Portfolio Projects */}
      <div className="section">
        <h2>🌐 Portfolio Projects</h2>
        <p>Here are links to my other enhanced capstone projects:</p>
        <ul>
          <li>
            <a href="https://chart5893.github.io/TreasureHuntGame/" target="_blank" rel="noopener noreferrer">
             🧭 Treasure Hunt Game
            </a>
          </li>
         <li>
           <a href="https://chart5893.github.io/HistogramProject/" target="_blank" rel="noopener noreferrer">
              📊 Histogram Project
           </a>
          </li>
          <a href="/company-results.html" target="_blank" rel="noopener noreferrer">
           💺 Company Offices App
          </a>
          
       </ul>
      </div>
    </div>
  );
}

export default App;
