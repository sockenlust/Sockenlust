window.addEventListener('DOMContentLoaded', () => {
  const bot = document.createElement('div');
  bot.style.position = 'fixed';
  bot.style.bottom = '20px';
  bot.style.right = '20px';
  bot.style.background = 'white';
  bot.style.padding = '10px';
  bot.style.borderRadius = '8px';
  bot.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
  bot.innerHTML = `
    <strong>Susi 🧦</strong><br>
    <em>Frag mich was zu den Socken…</em><br>
    <input type="text" id="chatInput" placeholder="Frag was..." style="width: 100%; margin-top: 5px;">
  `;
  document.body.appendChild(bot);

  const input = document.getElementById('chatInput');
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const msg = input.value.toLowerCase();
      let response = "Mh... das riecht nach guter Wahl 😘";
      if (msg.includes('socke')) response = "Unsere Socke war 2 Tage in Turnschuhen – bist du bereit?";
      if (msg.includes('preis')) response = "Susi sagt: Qualität hat ihren Preis – aber du bist es wert 💋";
      alert(response);
      input.value = '';
    }
  });
});
