var btn = document.getElementsByClassName('Submit');

var ul = document.querySelectorAll('.value');
var li = document.querySelectorAll('li');

ul.forEach((item, i) => {
  item.addEventListener("click",function(){
    if(item.checked){
    let val = this.value;
    let prev= i-1
    let choise =document.querySelector('.choice')
    item.closest('li').classList.add('check')
    choise.innerText = val
    li[prev].classList.add('prev');

    }
  })
});





function display(){
  var main =  document.getElementById('main');
  var answer=  document.getElementById('answer');
main.style.display ='none';
answer.style.display ='block ';


}
