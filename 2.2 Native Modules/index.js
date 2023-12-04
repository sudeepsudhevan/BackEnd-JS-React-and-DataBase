
const fs = require('node:fs');

fs.writeFile(file = "message.txt", data = "Hello from Nodejs!\nHello from sudeep", (err) => {
    if (err) throw err;
    console.log("The file has been Saved!")
})

fs.readFile(path = './message.txt', encoding = 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 