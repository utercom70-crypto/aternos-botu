const mineflayer = require('mineflayer')

function randomName(){
  const names = [
    "Emil",
    "Murad",
    "Rauf",
    "Ali",
    "Tural",
    "Kamran",
    "Orxan",
    "Nihad",
    "Samir",
    "Elvin",
    "Ramin",
    "Kamal"
  ]

  return names[Math.floor(Math.random()*names.length)] + Math.floor(Math.random()*1000)
}

function startBot(){

const bot = mineflayer.createBot({
  host: "trahira.aternos.host",
  port: 15200,
  username: randomName(),
  auth: "offline",
  version: "1.21.1"
})

console.log("Bot serverə qoşulmağa çalışır...")

bot.on('login',()=>{
  console.log("Serverə qoşuldu")
})

bot.on('spawn',()=>{

  console.log("Spawn oldu")

  // 10 saniyədən bir hərəkət
  setInterval(()=>{

    const actions = ["jump","forward","back","left","right"]
    const action = actions[Math.floor(Math.random()*actions.length)]

    bot.setControlState(action,true)

    setTimeout(()=>{
      bot.setControlState(action,false)
    },1000)

  },10000)

  // chat mesajları
  const messages = [
    "salam",
    "kim var",
    "server yaxsidir",
    "oynayan var?",
    "men burdayam"
  ]

  setInterval(()=>{

    const msg = messages[Math.floor(Math.random()*messages.length)]

    try{
      bot.chat(msg)
    }catch(e){}

  },60000)

})

bot.on('end',()=>{
  console.log("Serverden atildi. 15 saniye sonra yeniden girir")

  setTimeout(()=>{
    startBot()
  },15000)

})

bot.on('error',(err)=>{
  console.log("Xeta:",err.code)
})

}

startBot()
