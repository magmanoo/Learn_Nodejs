const { error } = require('console');
const fs = require('fs');
const path = require('path');

if(fs.existsSync('./newFolder')){
    fs.rmdir('./newFolder',(err) =>{
        if(err) throw err
        console.log('Directory Deleted');
    })
}
