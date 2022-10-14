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
        languages:["React.js","Node.js", "Express.js" ,"MongoDB", "Jira"],
        text: 'I currently am working on setting up Jira for the team since it is a startup and a new development team.\n\
        Since it is a startup, I also am working on the requirements engineering side of things such as making a vision document. \n\
        I also am making Figma designs for the UI/UX of the page. Later on, (in November) I will be working with the MERN stack \n\
        (Mongo, Express, React, Node). Overall I believe this part-time job will let me learn more valuable skills that includes both \n\
        technical and non technical responsibilities.',
        date: 'Sept-Dec 2022',
        category: {
        tag: 'Software Engineer Intern @ Fitzba Technologies Inc. (Part-time)',
        color: '#943c245e'
        }
    }
    // OBJECT 3
  ]

  export default timelineData;