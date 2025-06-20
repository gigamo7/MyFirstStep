let stars = document.getElementById('stars1');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let sawah = document.querySelector('.sawah');

window.onscroll = function() {
let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value *3 + 'px';
mountains3.style.top = value *2 + 'px';
mountains4.style.top = value *1.5 + 'px';
river.style.top = value + 'px';
boat6.style.top = value + 'px';
boat6.style.left = value * 3 + 'px';
sawah.style.fontSize = value + 'px';
if(scrollY >= 67) {
    sawah.style.fontSize = 67 + 'px';
    sawah.style.position = 'fixed';
    if(scrollY >= 470) {
        sawah.style.display = 'none';
    }else {
        sawah.style.display = 'block';
    }
    if(scrollY >= 181.3333282470703) {
        document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';}
}else {document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
}
}