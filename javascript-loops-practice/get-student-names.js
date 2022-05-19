/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (let x = 0; x < students.length; x++) {
    studentNames.push(students[x].name);
  }
  return studentNames;
}
