const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./CalMeHerman.js')
nocache('../CalMeHerman.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('Alan Botz', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ GO 5K SUBSCRIBE ]\n', 'yellow'), color('Subscribe YT ALAN BOTZ', 'yellow'))
	console.log(color('GA SUBSCRIBE BAKAL EROR:V', 'pink'))
	console.log(color('\n\n[ FOLOW IG @jb_alanganz', 'red'))
	dha.browserDescription = ["Alan", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE QR BY ALAN BOTZ 20CSECOND!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ ALAN BOTZl ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "Y",
    "YO",
    "YOU",
    "YOUT",
    "YOUTUB",
    "YOUTUBE A",
    "YOUTUBE AL",
    "YOUTUBE ALAN",
    "YOUTUBE ALAN BO",
    "YOUTUBE ALAN BOT",
    "YOUTUBE ALAN BOTZ",
    "YOUTUBE ALAN BOTZ J",
    "YOUTUBE ALAN BOTZ JA",
    "YOUTUBE ALAN BOTZ JAN",
    "YOUTUBE ALAN BOTZ JAN L",
    "YOUTUBE ALAN BOTZ JAN LU",
    "YOUTUBE ALAN BOTZ JAN LUP",
    "YOUTUBE ALAN BOTZ JAN LUPA",
    "YOUTUBE ALAN BOTZ JAN LUPA S",
    "YOUTUBE ALAN BOTZ JAN LUPA SU",
    "YOUTUBE ALAN BOTZ JAN LUPA SUB",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBS",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSC",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCR",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRI",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIB",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE G",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K S",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SU",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUB",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS N",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NG",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NGA",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NGAB",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NGAB B",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NGAB BS",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NGAB BSA",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NGAB BSA L",
    "YOUTUBE ALAN BOTZ JAN LUPA SUBSCRIBE GO 5K SUBS NGAB BSA LH"
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ Alan Botz ]', 'yellow'), color('BOT SUDAH AKTIF'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./CalMeHerman.js')(dha, message)
	})
}

starts()