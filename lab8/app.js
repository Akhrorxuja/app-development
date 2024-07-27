console.log('\n----- Example 1: Global Object, Console----');
console.log('Welcome to NodeJS by - ______');
console.warn('Warning! The file might be corrupted');
console.error('Syntax error! Check spelling');
console.trace('Trace error in line');

console.log('\n----- Example 2: Global Object, timer----');
setTimeout(()=> {console.warn('Time is over')}, 3000)

// let count = 9
// setInterval(()=> {
//   console.log(Counting ${count});
//   count -= 1
//   if (count==0){
//     clearInterval()
//   }
// }, 2000)

let count = 9
const timer = setInterval(()=> {
  console.log(`Counting ${count}`);
  count -= 1
  if (count==0){
    clearInterval()
  }
}, 2000)

console.log('\n--- Example 3: check or print directory or file ----');
console.log(`Current directory ${__dirname}`);
console.log(`Current file ${__filename}`);

console.log('\n--- Example 4: working with different model ----');
//import the module
const name = require ('./mod')

console.log(name('Xuja'))
console.log(name.id(123))
console.log(name.email('akhror0103@gmail.com'))

console.log('\n--- Example 5: nodejs event module ----');
console.log

console.log('--- Example 6: check or print directory or file ----');
console



console.log('\n--- Example 7: check or print directory or file ----');
let info = "\nThis file has three names: \nPeter\nMartha\nJason"
FileSystem.write('readmore.txt', info, function(error)){
    if(error){
        console.log(error)
    }
}


console.log('\n--- Example 8: append data into an existing file in nodejs ----');
flushSync.appendFile("user_email.txt", info, function(error)){
    if(error){console.log(error)}
}

console.log('\n--- Example 9: remove files ----');
flushSync.unlink("user_email.txt",(error)=>{
 if(error){console.log(error)}
})

console.log('\n--- Example 10: create files ----');
//.writeFile(), .appendFile(), .open()
flushSync.open("newFile.txt", 'w', function(error){
    if(error){console.log(error)}
    else {console.log('File saved')}
    })

console.log('\n----Example 11: create directory-----')
flushSync.mkdirSync('new_directory')

console.log('\n----Example 12: remove directory-----')
flushSync.mkdirSync('new_directory')

