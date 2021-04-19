const fs = require('fs')
const https = require('https')
const fetch = require('node-fetch')


//FETCH AND WRITE DATA INTO A FILE

fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        fs.writeFile('./result/posts.json' , JSON.stringify(json), ()=>{
            console.log('File written')
        })
        
    })






