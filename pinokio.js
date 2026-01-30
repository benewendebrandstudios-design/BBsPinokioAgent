module.exports = {
titre : "Mon Premier Agent",
description : "Ceci est mon agent personnalisé sur Pinokio",
icône : "icon.png",
menu : async (kernel) => {
return [{
html : '<i class="fa-solid fa-rocket"></i> Lancer l\'Agent',
href : "index.json"
}]
}
}
