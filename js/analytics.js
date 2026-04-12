// Google Analytics 4
// Replace G-XXXXXXXXXX with your actual GA4 measurement ID
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

// Track Telegram bot button clicks
document.addEventListener('DOMContentLoaded', () => {
  const botButtons = document.querySelectorAll('a[href*="t.me/CryptixVPN_bot"]');
  
  botButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Google Analytics event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'telegram_bot',
          'event_label': 'open_bot',
          'value': 1
        });
      }
    });
  });
  
  // Track franchise link clicks
  const franchiseLinks = document.querySelectorAll('a[href*="franchise"]');
  
  franchiseLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'franchise',
          'event_label': 'view_franchise',
          'value': 1
        });
      }
    });
  });
});
