window.showAvifSign = function(e) {
  const img = e.target;
  img.onerror = null;
  img.src = "/images/avif.webp";
};

document.addEventListener("DOMContentLoaded", () => {
  // ============================================================
  // 1. Light & Dark Theme
  // ============================================================

  const btn = document.getElementById("theme-toggle");
  const KEY = "theme";

  function save(t) { try { localStorage.setItem(KEY, t); } catch(e){} }
  function load() { try { return localStorage.getItem(KEY); } catch(e){ return null; } }

  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
  }

  function systemPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function init() {
    const stored = load();
    if (stored === "dark" || stored === "light") {
      apply(stored);
    } else {
      apply(systemPrefersDark() ? "dark" : "light");
    }
  }

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    apply(next);
    save(next);
  });

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", (e) => {
    if (!load()) { apply(e.matches ? "dark" : "light"); }
  });

  init();

  // ============================================================
  // 2. Back to Top
  // ============================================================
  const backTop = document.querySelector("#back-top");

  if (backTop) {
    backTop.style.display = "none";

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      backTop.style.display = scrollTop > 150 ? "block" : "none";
    }, { passive: true });

    backTop.addEventListener("click", (e) => {
      e.preventDefault();
      const duration = 500;
      const start = window.scrollY || document.documentElement.scrollTop;
      const startTime = performance.now();

      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        window.scrollTo(0, start * (1 - eased));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    });
  }

  // ============================================================
  // 3. Block Collapse
  // ============================================================
  const collapsibles = document.querySelectorAll('.collapsible');
  
  if (collapsibles.length > 0) {
    const firstContent = collapsibles[0].nextElementSibling;
    if (firstContent) {
      firstContent.style.display = 'block';
    }

    collapsibles.forEach(coll => {
      coll.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content) {
          const isVisible = content.style.display === 'block';
          content.style.display = isVisible ? 'none' : 'block';
        }
      });
    });
  }

  // ============================================================
  // 4. Bookshelf
  // ============================================================
  const bookshelfTitle = document.getElementById("bookshelf-title");
  const bookshelfContent = document.getElementById("bookshelf-content");

  if (bookshelfTitle && bookshelfContent) {
    bookshelfTitle.addEventListener("click", () => {
      bookshelfContent.classList.toggle("expanded");
    });
  }

  // ============================================================
  // 5. Calculate Build Days
  // ============================================================

  const dateBegin = new Date("2015/01/03 23:15:15");
  const dateEnd = new Date();
  
  if (!isNaN(dateBegin)) {
    const dayDiff = Math.floor((dateEnd - dateBegin) / (1000 * 60 * 60 * 24));
    document.getElementById("runtime").textContent = `${dayDiff} days`;
  }

  // ============================================================
  // 6. Post TOC
  // ============================================================

  const toc = document.querySelector(".post-toc");
  const tocWrapper = document.querySelector(".content-wrapper__inner");
  const headers = document.querySelectorAll(".post h1, .post h2, .post h3, .post h4, .post h5, .post h6");
  const tocLinks = document.querySelectorAll(".post-toc a");

  if (toc && tocWrapper && headers.length > 0) {
    
    const toggleTocVisibility = () => {
      const clientHeight = window.innerHeight;
      const clientWidth = document.documentElement.clientWidth;
      const leftMargin = (clientWidth - tocWrapper.clientWidth) / 2 - toc.clientWidth - 50;

      toc.style.visibility = (toc.clientHeight < clientHeight * 0.6 && leftMargin >= 50) 
        ? "visible" 
        : "hidden";
    };

    let activeLink = null;
    const observer = new IntersectionObserver((entries) => {
      let highestEntry = null;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!highestEntry || entry.boundingClientRect.top < highestEntry.boundingClientRect.top) {
            highestEntry = entry;
          }
        }
      }

      if (highestEntry) {
        const id = highestEntry.target.id;
        const newActiveLink = document.querySelector(`.post-toc a[href="#${id}"]`);

        if (newActiveLink && newActiveLink !== activeLink) {
          tocLinks.forEach(link => link.classList.remove("active"));
          
          newActiveLink.classList.add("active");
          activeLink = newActiveLink;
        }
      }
    }, {
      rootMargin: "0px 0px -80% 0px",
      threshold: 0
    });

    headers.forEach((header) => {
      if (header.id) {
        observer.observe(header);
      }
    });
    
    window.addEventListener("resize", toggleTocVisibility);

    toggleTocVisibility();
  }
});