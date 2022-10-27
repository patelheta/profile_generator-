const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/**  Devani loves listening to Ludovico Einaudi while coding,
 *  devouring Yak Momos for brunch, prefers Tennis over any other sport,
 *  and is amazing at dropping mad puns at inopportune times.
*/
let result = "";

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  result += `My name is ${answer},`;

  rl.question("What's an activity you like doing?", (answer) => {
    result += `I like to do ${answer},`;

    rl.question("What do you listen to while doing that?", (answer) => {
      result += `I love to listen ${answer},`;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        result += `My favourite meal is ${answer},`;

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          result += `I like to eat ${answer},`;

          rl.question("Which sport is your absolute favourite?", (answer) => {
            result += `My favourite sport is ${answer},`;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              result += `My superpower is ${answer}.`;

              console.log(result);
              rl.close();
            });
          });
        });
      });
    });
  });
});








