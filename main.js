var work =document.querySelector('body');
var html=document.querySelector('html')


var head=document.getElementById('header');

var bars=document.querySelector('.fa-bars');
var list=document.querySelector('.nav_list');
var close=document.querySelector('.fa-xmark');
bars.onclick=function(){
  list.style.transform='translateX(0%)';
  work.style.overflowY='hidden';
  html.style.overflowY='hidden';
  }
close.onclick = function() {
  list.style.transform = 'translateX(-200%)';
  work.style.overflowY='auto';
  html.style.overflowY='auto';
}
