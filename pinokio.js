module.exports = {
titre : "BBS Super Agent",
description : "Mon portail IA personnel",
icône : "icon.png",
menu : async (kernel) => {
return [
{ html : " 🚀Ouvrir ChatGPT", href : " https://chatgpt.com ", cible : "_blank" },
{ html : " 🧠Ouvrir Claude AI", href : " https://claude.ai ", cible : "_blank" },
{ html : " ✨Ouvrir Gemini", href : " https://gemini.google.com ", cible : "_blank" },
{ html : " 🎨Ouvrir Midjourney", href : " https://www.midjourney.com ", cible : "_blank" }
]
}
}
