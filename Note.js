console.log("Notes Start")
const fs = require('fs')


const Myfunction = () => {
    try {
        return JSON.parse(fs.readFileSync("note.txt"))
    } catch (err){
        return []
    }

}
const add = (title, body)=>{
    const note={
        title:title,
        body: body
    }
     const ajout = Myfunction()
   
    ajout.push(note)

    fs.writeFileSync("note.txt",JSON.stringify(ajout))
}
const remove = (title)=>{
    const note = Myfunction()
    const notefilter = note.filter(el => el.title !== title)
    console.log(notefilter)
    fs.writeFileSync("note.txt", JSON.stringify(notefilter))
}
const read =(title)=>{
    const note = Myfunction()
    const notefilter = note.filter(el => el.title === title)
    console.log(notefilter)
    fs.writeFileSync("note.txt", JSON.stringify(notefilter))
}
const list =()=>{
    const notes = Myfunction()
    notes.forEach((note) =>
     display(note));
}
    const display = (note)=>{
        console.log("********************************");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }

    module.exports = {
     add, remove, read,list
    }