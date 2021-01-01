exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `🔰 -----[ *MENU ${XPTN}* ]----- 🔰


❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
*INFO - INFO YANG ADA ^_^* 
🔴 *1. AUTHOR : Uwak Bot*
🔴 *2. INSTAGRAM : @yangkenoninkekkambing*
🔴 *3. GROUP WA:* ${groupwa}
🔴 *4. ORIGINAL SCRIPT BY : UwakBot*

*MAU PASANG IKLAN DI ${XPTN}?*
*WA ADMIN: ${nomer}

*JOIN GC OFFICIAL :*
${groupwa}

*MAU MASUKIN BOT DI GRUP LO?:*
*WA ADMIN : ${nomer}*`
}
