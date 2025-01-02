const timelineData = [
  {
      id:1,
      languages:["Python"] ,
      text: 'This was my very first volunteer position at a University of Alberta club! The project I was assigned to \n\
      was an object-detection Python project involving ML libraries such as TensorFlow. As assistant mentor, my role was to \n\
      understand the procedural aspect of the code and how the code flows and summarize it in a document that would then be \n\
      shown to young mentees. I worked in a team of 3 to help make a summary document and then we presented \n\
      to over 20 mentees by showing a live demo split over 6 meetings. ',
      date: 'May - August 2021',
      category: {
      tag: 'Assistant Mentor @ Future Creators ',
      color: '#943c245e'
      },
  },
  // OBJECT 1
  {   
      id:2,
      languages: ["Arduino", "C++"],
      text: `As a project developer, I was put in a team of 3 people and we were in charge of making a robot that can follow any black taped line drawn on the floor. \n\
      We build the robot using two motors, two wheels, infrared sensors, and an Arduino Uno microcontroller. \n\
      The logic the robot followed was developed by me in Arduino/C++. Later we provided a summary on how to make the project and I was responsible for explaining the code logic.`,
      date: 'Sept - Dec 2021',
      category: {
      tag: 'Project Developer @ Future Creators',
      color: '#943c245e'
      },
  },
  // OBJECT 2 
  {   
      id:3,
      languages:["React.js","Node.js", "Express.js" ,"PostgreSQL"],
      text: ' I was responsible for developing an adaptive question bank management system that would be a part of an adaptive learning system. \n\
      I developed the user interface for the question bank system using React.js and implemented server-side code using Node.js. Routing and REST APIs \n\
      were implmented using Express.js. I also designed a normalized (3NF) PostgreSQL database and created UML and ER diagrams to visualize the software and database design of the system.',
      date: 'May-August 2022',
      category: {
      tag: 'NSERC Research Assistant @ Athabasca University',
      color: '#943c245e'
      }
  /* The main project the whole team was working on was an adaptive learning system. \n\
  The end goal of the system would be to detect learning weaknessess and gaps quickly through assessments. \n\
  This would be helpful since the system can promote learning by asking questions at an appropriate difficuly level in formative assessments. \n\
  For my part, the key thing to remember is that a question can test multiple learning objectives and each learning objective can have prerequisite learning objectives. 
  Learning objectives are split into two types: course learning objectives and unit learning objectives. Each unit will also have prerequisite units.
  Since we are trying to help a student in a specific course, course prerequisites are not very important. 
  So what I had to do was create an question bank system so that someone can create courses, units, course learning objectives, unit learning objectives with prerequisite modelling. 
  In the same system, someone can create a question and "link" the question to learning objectives.
  */
  },
  
  {
    id:4,
      languages:["Figma", "Jira"],
      text: 'I researched and proposed feature-oriented software ideas matching the company’s strategic objectives .\n\
      Since it is a startup, I also created a vision document defining project scope and objectives ensuring alignment with business needs  \n\
      I also made Figma designs for the UI/UX of the page.',
      date: 'Sep 2022 - Dec 2022',
      category: {
      tag: 'Requirements Engineer Intern @ Fitzba Technologies Inc (Part-time)',
      color: '#943c245e'
      }
  },

  {
      id:5,
        languages:["React.js","Django", "Azure" ,"Python"],
        text: 'I assisted in the full stack development of an internal semantic search web application utilized by 500+ engineers \n\
        by OPG employees to find documents of various types from different stations. Right now the search tool uses ML models in \n\
        the backend so that based on the user\'s search, it can find the best matches from thousands of documents.\n\
        I have built a dynamic dashboard in the web application using Chart.js with drill in capabilities and have gained experience in \n\
        using Pandas dataframes in the backend to retrieve the appropriate data for the charts. I have also built a editable search results \n\
        page where a user can delete a certain search result and the change shows in the charts. In backend tasks I have worked on many middleware functions \n\
        as well as functions that transform the data into displayable data \n\
        I use Azure DevOps for version control, task tracking and pipelining and I use \n\
        Microsoft Azure and Docker for containerization and deployment.',
        date: 'Jan-August 2023',
        category: {
        tag: 'Software Engineer Intern @ Ontario Power Generation (OPG)',
        color: '#943c245e'
        }
  },
  {
    id:6,
      languages:["Angular","Typescript", "C#"],
      text: 'I improved software maintainability by implementing the migration of authentication services from a Go-based \n\
      microservice to a .NET Core microservice in C#, aligning with the team’s primary technology stack. I developed a \n\
      diagnostic web application using Angular and TypeScript to troubleshoot REST API endpoints \n\
      and SSE connections for oil rig monitoring software. This application significantly reduced customer complaints \n\
      about the software. I ensured the timely delivery of bug fixes and new features by addressing numerous bug and  \n\
      feature tickets through efficient software development practices, including collaborative sprint planning and backlog \n\
      grooming. Additionally, I gained expertise in state management and asynchronous processes by implementing NgRx, RxJS, \n\
      and applying the Singleton and Factory design patterns, which enhanced code reusability and maintainability.',
      date: 'May 2024 - December 2024',
      category: {
      tag: 'Software Engineer Intern @ NOV (formerly National Oilwell Varco)',
      color: '#943c245e'
      }
},
]

export default timelineData;