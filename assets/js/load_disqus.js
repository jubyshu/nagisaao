function loadDisqus() {
  let d = document, s = d.createElement('script');
  s.src = '//{{ site.disqus | jsonify }}.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  window.disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = window.location.href.substring(18);
  };
}

let runningOnBrowser = typeof window !== "undefined";
let isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);
let supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;

setTimeout(function () {
  if (!isBot && supportsIntersectionObserver) {
    let disqus_observer = new IntersectionObserver(function(entries) {
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