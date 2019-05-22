
var nav=document.getElementsByClassName('nav');


for(var i=0;i<nav.length;i++){
    nav[i].onclick=f1;
}
function f1(Event){
    if(this==nav[0]){
        this.classList.add('active');
        nav[1].classList.remove('active');
        nav[2].classList.remove('active');
        nav[3].classList.remove('active');
    }
    else if(this==nav[1]){
        this.classList.add('active');
        nav[0].classList.remove('active');
        nav[2].classList.remove('active');
        nav[3].classList.remove('active');
    }
    else if(this==nav[2]){
        this.classList.add('active');
        nav[1].classList.remove('active');
        nav[0].classList.remove('active');
        nav[3].classList.remove('active');
    }
    else if(this==nav[3]){
        this.classList.add('active');
        nav[1].classList.remove('active');
        nav[2].classList.remove('active');
        nav[0].classList.remove('active');
    }
}



window.onscroll=function(Event){
    var scrolled = window.pageYOffset;
    if(scrolled>0&&scrolled<500){
        nav[0].classList.add('active');
        nav[1].classList.remove('active');
        nav[2].classList.remove('active');
        nav[3].classList.remove('active');
    }
    else if(scrolled>400&&scrolled<1500){
        nav[1].classList.add('active');
        nav[0].classList.remove('active');
        nav[2].classList.remove('active');
        nav[3].classList.remove('active');
    }
    else if(scrolled>1500&&scrolled<2600){
        nav[2].classList.add('active');
        nav[1].classList.remove('active');
        nav[0].classList.remove('active');
        nav[3].classList.remove('active');
    }
    else if(scrolled>2500){
        nav[3].classList.add('active');
        nav[1].classList.remove('active');
        nav[0].classList.remove('active');
        nav[2].classList.remove('active');
    }
}
