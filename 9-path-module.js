const path = require('path');
 
 console.log(path.sep);
 
 const path1 = path.join("content","subfolder","test.txt");
 console.log(path1);
 
 const basename = path.basename(path1);
 console.log(basename);
 
 const abPath = path.resolve(__dirname,"content","subfolder","test.txt");
 console.log(abPath);
 
 const abPath2 = path.join(__dirname,"content","subfolder","test.txt");
 console.log(abPath2);
 