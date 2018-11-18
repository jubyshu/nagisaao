var toc = document.querySelector('.post-toc');
function tocShow() {
    var clientHeight = document.documentElement.clientHeight;
    var clientWidth = document.documentElement.clientWidth;
    var tocWrapper = document.querySelector('.content-wrapper__inner');
    if (toc.clientHeight < clientHeight*0.6 && tocWrapper.clientWidth > 750) {
        toc.style.visibility = 'visible';
        if (toc.clientWidth < 100) {
            tocWrapper.style.marginRight = '160px';
        } else {
            tocWrapper.style.marginRight = 1.3 * toc.clientWidth + 'px';
        }
        tocWrapper.style.marginLeft = '0px';
    } else {
        toc.style.visibility = 'hidden';
        tocWrapper.removeAttribute('style');
    }
}

if (!!toc) {
        window.addEventListener('resize', tocShow, false);
        tocShow();
    }