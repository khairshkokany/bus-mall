'use strict';




let images=document.getElementById('images');



let leftImagesElement=document.getElementById('left');

let rightImagesElement=document.getElementById('right');

let middleImagesElement=document.getElementById('middle');

images.append(leftImagesElement);
images.append(rightImagesElement);
images.append(middleImagesElement);


let maxAttempts=25;

let userAttempts=0;

let leftImageRandom;

let rightImageRandom;

let middleImageRandom;



function User(name,source) {



  this.name=name;
  this.source=source;
  this.votes=0;
  this.shown=0;
  User.allUser.push(this);

}

User.allUser=[];


new User('bag','img/bag.jpg');
new User('banana','img/banana.jpg');
new User('bathroom','img/bathroom.jpg');
new User('boots','img/boots.jpg');
new User('breakfast','img/breakfast.jpg');
new User('bubblegum','img/bubblegum.jpg');
new User('chair','img/chair.jpg');
new User('cthulhu','img/cthulhu.jpg');
new User('dog-duck','img/dog-duck.jpg');
new User('dragon','img/dragon.jpg');
new User('pen','img/pen.jpg');
new User('pet-sweep','img/pet-sweep.jpg');
new User('scissors','img/scissors.jpg');
new User('shark','img/shark.jpg');
new User('sweep','img/sweep.png');
new User('tauntaun','img/tauntaun.jpg');
new User('unicorn','img/unicorn.jpg');
new User('usb','img/usb.gif');
new User('water-can','img/water-can.jpg');
new User('wine-glass','img/wine-glass.jpg');




function generateRandomNumber() {

  return Math.floor(Math.random() * User.allUser.length);



}

console.log(generateRandomNumber());

function renderImages() {

  leftImageRandom=generateRandomNumber();

  rightImageRandom=generateRandomNumber();

  middleImageRandom=generateRandomNumber();


  while (leftImageRandom===rightImageRandom || leftImageRandom===middleImageRandom || middleImageRandom===rightImageRandom){

    leftImageRandom=generateRandomNumber;
    middleImageRandom=generateRandomNumber;
    rightImageRandom=generateRandomNumber;


  }

  User.allUser[leftImageRandom].shown++;
  User.allUser[rightImageRandom].shown++;
  User.allUser[middleImageRandom].shown++;

  console.log(User.allUser[leftImageRandom].source);



  leftImagesElement.src=User.allUser[leftImageRandom].source;

  rightImagesElement.src=User.allUser[rightImageRandom].source;

  middleImagesElement.src=User.allUser[middleImageRandom].source;

}


renderImages();

images.addEventListener('click',userClick);





function userClick(event) {

  userAttempts++;

  console.log(userAttempts);



  if (userAttempts<=maxAttempts) {


    if (event.target.id==='left') {
      console.log(leftImagesElement);

      User.allUser[leftImageRandom].votes++;

    }else if (event.target.id==='right') {

      User.allUser[rightImageRandom].votes++;

    }else {

      User.allUser[middleImageRandom].votes++;

    }

    console.log(User.allUser);

    renderImages();
  }


  else{

    // let list=document.getElementById('result-list');


    // for (let i = 0; i < User.allUser.length; i++) {
    //   let userResults=document.createElement('li');

    //   list.appendChild(userResults);

    //   userResults.textContent=`${User.allUser[i].name} has ${User.allUser[i].shown} with ${User.allUser[i].votes}`;
    //   console.log('hello');
    // }
    images.removeEventListener('click',userClick);


  }




}


let button=document.getElementById('button');

button.addEventListener('click',buttonClick);



function buttonClick() {


  if (userAttempts <= maxAttempts) {


    let list=document.getElementById('result-list');


    for (let i = 0; i < User.allUser.length; i++) {
      let userResults=document.createElement('li');

      list.appendChild(userResults);

      userResults.textContent=`${User.allUser[i].name} has ${User.allUser[i].shown} with ${User.allUser[i].votes}`;
      console.log('hello');



    }

    button.removeEventListener('click',buttonClick);


  }





}












