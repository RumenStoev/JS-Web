

const fs = require("fs");


function  exportFile(cb) {
     return fs.readFileSync("user.txt",{encoding:"utf-8"} , function(err,data){
         cb(err,data);
     }
      );

};


module.exports = {
    exportFile
};
