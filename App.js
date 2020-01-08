console.log("starting")

const notes = require('./Note')
const argv = require('yargs').argv 


const titre = argv.titre;
const content = argv.content;
const commande = argv._[0]

if(commande === "add")
{
    console.log('adding')
    notes.add(titre,content)
}
else if(commande ==="remove"){
    console.log('remove')
    notes.remove(titre)
}
else if(commande === "read"){
    console.log("read")
    notes.read(titre)

}
else if(commande === "list"){
    console.log("listes")
    notes.list()
}
else{
    console.log("invalid commande")
}

