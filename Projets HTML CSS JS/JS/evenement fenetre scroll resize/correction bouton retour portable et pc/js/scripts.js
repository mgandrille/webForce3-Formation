window.addEventListener('scroll', sizeChecking);
window.addEventListener('resize', sizeChecking);

function sizeChecking() {
    if(window.innerWidth > 768){
        document.querySelector('div').style.cssText = (window.scrollY > 150) ? 'right: 0px; bottom: 0px' : 'right: -100px; bottom: 0px';
    }else {
        document.querySelector('div').style.cssText = (window.scrollY > 150) ? 'bottom: 0px; right: 0px' : 'bottom: -100px; right: 0px';
    }
}