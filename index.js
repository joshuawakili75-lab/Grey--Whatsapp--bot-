const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('Scan this QR code with WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('🤖 Grey WhatsApp Bot is ready!');
});

client.on('message', async (message) => {
    const text = message.body.toLowerCase().trim();

    if (text === 'hi' || text === 'hello') {
        await message.reply('👋 Hello! I am Grey 🤖');
    }

    if (text === '!help') {
        await message.reply(
            '🤖 *Grey Bot Commands*\n\n' +
            '👋 hello — Say hello\n' +
            '❓ !help — Show commands\n' +
            '🤖 !grey — Talk to Grey'
        );
    }

    if (text === '!grey') {
        await message.reply('Yes, MY KING? 👑🤖');
    }
});

client.initialize();
