window.showAvifSign = function(e) {
  const img = e.target;
  img.onerror = null;
  img.src = "/images/avif.webp";
};

document.addEventListener("DOMContentLoaded", () => {
  // ============================================================
  // 1. Back to Top
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
  // 2. Post TOC
  // ============================================================
  const toc = document.querySelector(".post-toc");
  
  if (toc) {
    const tocWrapper = document.querySelector(".content-wrapper__inner");
    const headers = document.querySelectorAll(".post h1, .post h2, .post h3, .post h4, .post h5, .post h6");
    const tocLinks = document.querySelectorAll(".post-toc a");

    const toggleTocVisibility = () => {
      if (!tocWrapper) return;
      
      const clientHeight = window.innerHeight;
      const clientWidth = document.documentElement.clientWidth;
      const leftMargin = (clientWidth - tocWrapper.clientWidth) / 2 - toc.clientWidth - 50;

      toc.style.visibility = (toc.clientHeight < clientHeight * 0.6 && leftMargin >= 50) 
        ? "visible" 
        : "hidden";
    };

    const highlightTocOnScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      let activeIndex = -1;

      for (let i = 0; i < headers.length; i++) {
        const headerTop = headers[i].getBoundingClientRect().top + scrollTop;
        if (scrollTop >= headerTop - 10) {
          activeIndex = i;
        } else {
          break; 
        }
      }

      if (activeIndex >= 0 && tocLinks[activeIndex]) {
        tocLinks.forEach(link => link.classList.remove("active"));
        tocLinks[activeIndex].classList.add("active");
      }
    };

    window.addEventListener("resize", toggleTocVisibility);
    window.addEventListener("scroll", highlightTocOnScroll, { passive: true });
    
    toggleTocVisibility();
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
    document.querySelector('#runtime').textContent = `${dayDiff} days`;
  }
});