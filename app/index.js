import _0x2c7e25 from 'fs';
import _0x11f6bc from 'axios';
import _0x1eafd3 from 'yaml';
import _0x2cc7ee from 'chalk';
import figlet from 'figlet';

function displayBanner() {
  console.log(_0x2cc7ee.blue(figlet.textSync('Discord Bot', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  })));
  console.log(_0x2cc7ee.cyan("========================================="));
  console.log(_0x2cc7ee.cyan("          Author : Nofan Rambe           "));
  console.log(_0x2cc7ee.cyan("          Welcome & Enjoy Sir!           "));
  console.log(_0x2cc7ee.cyan("========================================="));
}
async function main() {
  displayBanner(); 
  const _0x717993 = await loadConfig();
  const _0x4b1a37 = loadMessages();
  if (!_0x717993.token) {
    console.error(_0x2cc7ee.red("[ERROR] No bot token provided in config.js!"));
    process.exit(0x1);
  }
  if (!_0x717993.channel_id) {
    console.error(_0x2cc7ee.red("[ERROR] No channel ID provided in config.js!"));
    process.exit(0x1);
  }
  if (!_0x4b1a37.length) {
    console.error(_0x2cc7ee.red("[ERROR] No messages found in chat.txt!"));
    process.exit(0x1);
  }
  const _0x59b00b = _0x717993.token_delay || 0x5;
  const _0x179c35 = _0x717993.message_delay || 0x2;
  const _0x4bcbdd = _0x717993.restart_delay || 0xa;
  while (true) {
    for (const _0x35e3ec of _0x717993.token) {
      try {
        const _0xde5385 = new DiscordBot(_0x35e3ec);
        const _0x34d751 = await _0xde5385.username;
        for (const _0x248e8f of _0x717993.channel_id) {
          const _0x15ba54 = _0x4b1a37[Math.floor(Math.random() * _0x4b1a37.length)];
          const _0x569458 = await _0xde5385.sendMessage(_0x248e8f, _0x15ba54);
          if (_0x569458.content) {
            console.log(_0x2cc7ee.green("[INFO] [" + _0x34d751 + "] => Sent to Channel " + _0x248e8f + ": " + _0x15ba54));
          }
          await new Promise(_0x52b0a4 => setTimeout(_0x52b0a4, _0x179c35 * 0x3e8));
        }
        console.log(_0x2cc7ee.yellow("[INFO] Waiting for " + _0x59b00b + " Seconds before processing the next token..."));
        await new Promise(_0x2d319a => setTimeout(_0x2d319a, _0x59b00b * 0x3e8));
      } catch (_0x162067) {
        console.error(_0x2cc7ee.red("[CRITICAL ERROR] Skipping token due to error: " + _0x162067.name + ": " + _0x162067.message));
      }
    }
    console.log(_0x2cc7ee.yellow("[INFO] Waiting for " + _0x4bcbdd + " Seconds before restarting..."));
    await new Promise(_0x542db0 => setTimeout(_0x542db0, _0x4bcbdd * 0x3e8));
  }
}

main()["catch"](_0x409605 => {
  console.error(_0x2cc7ee.red("[CRITICAL ERROR] " + _0x409605.name + ": " + _0x409605.message));
});
