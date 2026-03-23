const but=document.querySelector('.gen');
const copy=document.querySelector('.copy');

const pass=document.querySelector('.pass');
but.addEventListener('click',()=>{

pass.innerText=generate();

})
copy.addEventListener('click',()=>{
  navigator.clipboard.writeText(pass.innerText).then(()=>{
    alert('copied')
  })
})

function generate(){
  let passw='';
  for(let i=0;i<8;i++){
    passw+=random();
  }
  return passw;
}
function random(){
let num = Math.floor(Math.random() * 4) + 1;
let char='';
if(num==1){
char=randomUpper();
}
else if(num==2){
  char=randomLower();
}
else if(num==3){
  char=randomDigit();
}
else if(num==4){
  char=randomSpecial()
}
  return char;
}







function randomUpper(){
let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let index=Math.floor(Math.random()*26);
return upper[index];
}





function randomLower(){
  let lower='abcdefghijklmnopqrstuvwxyz'
  let index=Math.floor(Math.random()*26);
  return lower[index];
}

function randomSpecial(){
  let specials = "!@#$%^&*()_+[]{}|:,.<>?~";

  let index=Math.floor(Math.random()*24);
  return specials[index];

}

function randomDigit(){
return Math.floor(Math.random()*10);
}
console.log(generate());
let text=document.querySelector('div').textContent;
text='hello'