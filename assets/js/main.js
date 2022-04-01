// back to top
let backTop = document.querySelector("#back-top");
backTop.style.display = "none";
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener("scroll", function() {
    if (this.pageYOffset > 150) {
      backTop.style.display = "block";
    } else {
      backTop.style.display = "none";
    }
  });
  backTop.onClick = function() {
    window.pageYOffset = 0;
  };
});

// generate post toc
let toc = document.querySelector(".post-toc");
function tocShow() {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  let tocWrapper = document.querySelector(".content-wrapper__inner");
  let leftMargin =
    (clientWidth - tocWrapper.clientWidth) / 2 - toc.clientWidth - 50;
  if (toc.clientHeight < clientHeight * 0.6 && leftMargin >= 50) {
    toc.style.visibility = "visible";
  } else {
    toc.style.visibility = "hidden";
  }
};
if (!!toc) {
  window.addEventListener("resize", tocShow, false);
  tocShow();
} 
function tocScroll() {
  let headers = document.querySelectorAll(".post h1, h2, h3, h4, h5, h6");
  let tocTitles = document.querySelectorAll('.post-toc a')
  let scrollHeight = window.pageYOffset;
  for (let i = 0; i < headers.length; i++) {
    let contentHeight = headers[i].getBoundingClientRect().top + window.scrollY;
    if (contentHeight < scrollHeight) {
      tocTitles.forEach(title => title.classList.remove("active"))
      tocTitles[i].classList.add("active");
    }
  }
};
if (toc) {
  window.addEventListener("scroll", tocScroll);
}

// block collapse
document.addEventListener("DOMContentLoaded", function() {
  let coll = document.querySelectorAll('.collapsible');
  for (let i = 0; i < coll.length; i++) {
    let firstcoll = coll[0].nextElementSibling;
    firstcoll.style.display = 'block';
    coll[i].addEventListener('click', function() {
      let collcontent = this.nextElementSibling;
      if (collcontent.style.display === 'block') {
        collcontent.style.display = 'none';
      } else {
        collcontent.style.display = 'block';
      }
    });
  }
});

// gitlab embed snippets
let gitlabGist = document.querySelector(".gitlab-embed-snippets");
if (gitlabGist) {
  gitlabGist.setAttribute("id", "gitlab-gist");
}

// imgage onerror event
function showAvifSign() { 
  let img = event.srcElement; 
  img.src = "/images/avif.webp"; 
  img.onerror = null;
};