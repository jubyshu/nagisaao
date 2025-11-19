// back to top
let backTop = document.querySelector("#back-top");
backTop.style.display = "none";

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener("scroll", function() {
    backTop.style.display = window.pageYOffset > 150 ? "block" : "none";
  });

  backTop.onclick = function() {
    const duration = 500; // 动画时间(毫秒)
    const start = window.pageYOffset;
    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, start * (1 - eased));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };
});

// generate post toc
const toc = document.querySelector(".post-toc");

function tocShow() {
  if (!toc) return;

  const clientHeight = document.documentElement.clientHeight;
  const clientWidth = document.documentElement.clientWidth;
  const tocWrapper = document.querySelector(".content-wrapper__inner");

  const leftMargin =
    (clientWidth - tocWrapper.clientWidth) / 2 - toc.clientWidth - 50;

  toc.style.visibility =
    toc.clientHeight < clientHeight * 0.6 && leftMargin >= 50
      ? "visible"
      : "hidden";
}

if (toc) {
  window.addEventListener("resize", tocShow);
  tocShow();
}

// scroll highlight
function tocScroll() {
  const headers = document.querySelectorAll(
    ".post h1, .post h2, .post h3, .post h4, .post h5, .post h6"
  );
  const tocTitles = document.querySelectorAll(".post-toc a");

  const scrollTop = window.pageYOffset;
  let activeIndex = -1;

  headers.forEach((header, i) => {
    const headerTop = header.getBoundingClientRect().top + window.scrollY;
    if (scrollTop >= headerTop - 10) { // 可调整偏移量
      activeIndex = i;
    }
  });

  if (activeIndex >= 0) {
    tocTitles.forEach((title) => title.classList.remove("active"));
    if (tocTitles[activeIndex]) tocTitles[activeIndex].classList.add("active");
  }
}

if (toc) {
  window.addEventListener("scroll", tocScroll);
}

// block collapse
document.addEventListener("DOMContentLoaded", function() {
  let coll = document.querySelectorAll('.collapsible');
  // 只让第一个内容在初始化时展开
  if (coll.length > 0) {
    let firstContent = coll[0].nextElementSibling;
    firstContent.style.display = 'block';
  }
  // 给每个 collapsible 添加 toggle 功能
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
      let content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("bookshelf-title");
  const content = document.getElementById("bookshelf-content");

  title.addEventListener("click", () => {
    content.classList.toggle("expanded");
  });
});

// gitlab embed snippets
document.addEventListener("DOMContentLoaded", () => {
  let gitlabGist = document.querySelector(".gitlab-embed-snippets");
  if (gitlabGist) gitlabGist.id = "gitlab-gist";
});

// imgage onerror event
function showAvifSign(e) {
  const img = e.target;
  img.onerror = null;
  img.src = "/images/avif.webp";
}