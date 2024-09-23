// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function lowerUpperArray(n1, n2) {
  let lower = 0
  let upper = 0
  let result = []
  if(n1 < n2) {
    lower = n1
    upper = n2
  }else {
    lower = n2
    upper = n1
  }
  for(let i = lower; i <= upper; i++) {    
    result.push(i)
  }
  return result
}
// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

function exclamation(string, number) {
  string = string.toUpperCase()
  return string + '!'.repeat(number)
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addTime(time, add) {
  let timeSplit = time.split(':')
  let hour = timeSplit[0]
  let minutes = timeSplit[1]

  let oldDate = new Date()

  oldDate.setHours(hour, minutes)

  let newDate = new Date(oldDate.getTime() + add * 60000)
  let returnHour = ''
  let returnMinutes = ''
  if(newDate.getHours() === 0) {
    returnHour = '0' + newDate.getHours()
  }else {
    returnHour = newDate.getHours()
  }

  if(newDate.getMinutes() < 10) {
    returnMinutes += '0' + newDate.getMinutes()
  }else {
    returnMinutes = newDate.getMinutes()
  }
  
  return `${returnHour}:${returnMinutes}`


}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowerUpperArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
