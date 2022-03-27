function loadDisqus() {
  var d = document, s = d.createElement('script');
  s.src = '//juby.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  window.disqus_config = function () {
    this.page.url = 'https://jubeny.com/2022/03/raskolnikov/';
    this.page.identifier = '/2022/03/raskolnikov/';
  };
}

var runningOnBrowser = typeof window !== "undefined";
var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);
var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;

setTimeout(function () {
  if (!isBot && supportsIntersectionObserver) {
    var disqus_observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        loadDisqus();
        disqus_observer.disconnect();
      }
    }, { threshold: [0] });
    disqus_observer.observe(document.getElementById('disqus_thread'));
  } else {
    loadDisqus();
  }
}, 1);