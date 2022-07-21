const timelineData = [
    {
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
        text: 'As a project developer, I was put in a team of 3 people and we were in charge of making a robot that can follow any black taped line drawn on the floor. \n\
        We build the robot using two motors, two wheels, infrared sensors, and an Arduino Uno microcontroller. \n\
        The logic the robot followed was developed by me in Arduino/C++. Later we provided a summary on how to make the project and I was responsible for explaining the code logic.',
        date: 'Sept - Dec 2021',
        category: {
      tag: 'Project Developer @ Future Creators',
      color: '#e17b77'
    },
    },
    // OBJECT 2 
    {
        text: ' I was responsible for developing an adaptive question bank management system that would be a part of an adaptive learning system. \n\
        I developed the user interface for the question bank system using React.js and implemented server-side code using Node.js. Routing and REST APIs \n\
        were implmented using Express.js. I also designed a normalized (3NF) PostgreSQL database and created UML and ER diagrams to visualize the software and database design of the system.',
        date: 'May-August 2022',
        category: {
      tag: 'NSERC Research Assistant @ Athabasca University',
      color: '#1DA1F2'
    },
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
    // OBJECT 3
  ]

  export default timelineData;