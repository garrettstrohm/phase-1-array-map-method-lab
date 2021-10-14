const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => tutorials.map(titles => {
  let deconstructedTitles = titles.split(" ");
  const capitalizedTitles = deconstructedTitles.map(title => {
    return title[0].toUpperCase() + title.substr(1);
  }).join(" ");
  return capitalizedTitles;
}) 



// const words = testTutorial.split(" ");

// const capitalizedTutorial = words.map(word => { 
//   return word[0].toUpperCase() + word.substring(1);
// }).join(" ");
// console.log(capitalizedTutorial)
// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = [];

// for (const student of students) {
//   rollCall.push( student + " the wizard" );
// }

// function studentRollCall(student) {
//   return student + " the wizard";
// }

// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = students.map(studentRollCall);
// console.log(rollCall);

// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = students.map(function(students) {
//   return students + " the wizard";
// })

// console.log(rollCall);

// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = students.map(students => students + " the wizard");

// console.log(rollCall);

// const robots = [
//   { name: 'Johnny 5', modes: 5, isActivated: false, },
//   { name: 'C3PO', modes: 3, isActivated: false, },
//   { name: 'Sonny', modes: 2.5, isActivated: false, },
//   { name: 'Baymax', modes: 1.5, isActivated: false, },
// ];

// const activatedRobots = robots.map(robot => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   });
// });

// console.log(activatedRobots);