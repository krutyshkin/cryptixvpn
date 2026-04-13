// Google Analytics 4 — замените G-XXXXXXXXXX на ваш реальный GA4 Measurement ID
(function() {
  var GA_ID = 'G-XXXXXXXXXX'; // TODO: вставьте ваш ID
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);

  // Отслеживание кликов по кнопкам Telegram-бота
  document.addEventListener('DOMContentLoaded', function() {
    var botButtons = document.querySelectorAll('a[href*="t.me/CryptixVPN_bot"]');
    botButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        gtag('event', 'click', {
          event_category: 'telegram_bot',
          event_label: btn.textContent.trim() || 'open_bot',
          value: 1
        });
        if (typeof ym !== 'undefined') {
          ym(108510242, 'reachGoal', 'telegram_bot_click');
        }
      });
    });

    // Отслеживание кликов по ссылке на франшизу
    var franchiseLinks = document.querySelectorAll('a[href*="franchise"]');
    franchiseLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'click', {
          event_category: 'franchise',
          event_label: 'view_franchise'
        });
      });
    });
  });
})();
