var x = 0;
var ancho = window.innerWidth;
var largo = window.innerHeight;
let progreso = 0;

let Animacion = document.querySelector('.Elbo');
let Animafoto1 = document.querySelector('.imagen1');
let Animafoto2 = document.querySelector('.imagen2');
let Animafoto3 = document.querySelector('.imagen3');
let AnimaTexto = document.querySelector('.Textil');
let anim1 = anime({
  targets: [Animacion], 
  duration: 5000,
  delay: 1,
  easing: 'easeInBack',
  loop: true,
  translateX: [(ancho/2)-250 , -(ancho/2)+250,-(ancho/2)+250,(ancho/2)-250,'0'],
  translateY: [(largo/2)-150,(largo/2)-150,-(largo/2)+150,-(largo/2)+150,'0'],
  autoplay: false,
});
let anim2 = anime({
  targets: [Animacion], 
  duration: 4000,
  delay: 1,
  loop: true,
  easing: 'easeOutBounce',
  translateX: ['50','0' , '150','0','200','0','150','0', '50','0','0','0'],
  translateY: ['-200', '0','-150','0','0','0','150','0','200','0','200','0'],
  autoplay: false,
});
let anim3 = anime.timeline({
  easing: 'easeInOutSine',
  autoplay: false,
  update: function(a) {
    if(Math.round(a.progress) >= 50){
      document.getElementById("idimg1").style.visibility = "visible";
      document.getElementById("idimg2").style.visibility = "visible";
      document.getElementById("idimg3").style.visibility = "visible";
      document.getElementById("Texto").style.visibility = "visible";

    }
  }
});
anim3
  .add({
    targets: [Animacion], 
    duration: 3000,
    delay: 1,
    scale: ['1','3','0'],
    rotate: '5turn',
  })
  .add({
    targets: [Animafoto1], 
    duration: 3000,
    delay: 1,
    translateX: ['300'],
    translateY: [-largo/2 +160],
    scale: ['0','1'],
    rotate: '5turn',
  },"-=500")
  .add({
    targets: [Animafoto2], 
    duration: 3000,
    delay: 1,
    translateX: ['-300'],
    translateY: [-largo/2 +160],
    scale: ['0','1'],
    rotate: '5turn',
  },"-=3000")
  .add({
    targets: [Animafoto3], 
    duration: 3000,
    delay: 1,
    translateX: ['0'],
    translateY: [-largo/2 + 160],
    scale: ['0','1'],
    rotate: '5turn',
  },"-=3000")
  .add({
    targets: [AnimaTexto], 
    duration: 3000,
    delay: 1,
    scale: ['0','1'],
  },"-=3000")

document.getElementById("raro").onclick = function() {
  if(x == 0){
    anim1.play();
    x = 1;
  }
  else if (x == 1){
    anim1.pause();
    anim2.play();
    x = 2;
  }
  else if(x == 2){
    anim2.pause();
    anim3.play();
  }

  if(progreso > 70){
    document.getElementById('pero').style.visibility = "visible";
  }

}


  