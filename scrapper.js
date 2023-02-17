/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const jsonfile = require('jsonfile');
const file = './books.json';
let limit = 7600
let i = 7201
// validate urls existence and increment i
async function isUrlFound(){
    let url = `https://covers.openlibrary.org/b/id/${i}.json`;
    i = i + 2;
    let res = await fetch(url)
    let txt = await res.text()
    if(txt === 'not found') return false;
    else { 
        let data = JSON.parse(txt)
        return (data.olid === null)? false: data.olid
    }
}
// get single book info and save to file        
async function getBook(olid){
if (olid){
    let response = await fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${olid}&format=json&jscmd=data`);
    let json = await response.json()
    let res = json[`OLID:${olid}`];
    let newbook = {
                            title: res.title,
                            author: res.authors?.[0]?.name || res.publishers?.[0].name ,
                            author_url: res.authors?.[0].url,
                            preview: res.url,
                            cover: res.cover,
                            description: res.excerpts?.[0].text
                        }
                        // write to file 
    if(newbook.description) await jsonfile.writeFile(file, newbook, { flag: "a"});
}}
while(i < limit){
    isUrlFound().then(olid => {
        getBook(olid)
    })
}
