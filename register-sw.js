
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
SameSite="None"
/*{
  "short_name": "Calculator",
  "name": "Calculate math problems!",
  "icons": [
    {
      "src": "data:image/png;base64,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",
      "type": "image/png",
      "sizes": "225x225",
       "purpose": "any maskable"
    },
    {
      "src": "https://img.favpng.com/2/4/21/computer-icons-calculator-icon-png-favpng-YgmvNeMRrzCWYAvDYZTa0zyGw.jpg",
      "type": "image/png",
      "sizes": "225x225",
       "purpose": "any maskable"
    }
  ],
  "start_url": ".",
  "background_color": "#3367D6",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#3367D6"
}*/