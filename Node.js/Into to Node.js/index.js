const fsManager = require('./file-manager');


fsManager.exportFile(function(err,data) {
    if(err) {
        console.log(err); return;
    }
    console.log(data);
});


