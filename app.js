'use strict';




let images=document.getElementById('images');



let leftImagesElement=document.getElementById('left');

let rightImagesElement=document.getElementById('right');

let middleImagesElement=document.getElementById('middle');

images.append(leftImagesElement);
images.append(rightImagesElement);
images.append(middleImagesElement);

let timesRow=[];

let maxAttempts=25;

let userAttempts=0;

let leftImageRandom;

let rightImageRandom;

let middleImageRandom;


let goatName=[];
let votes=[];
let shown=[];



function User(name,source) {



  this.name=name;
  this.source=source;
  this.votes=0;
  this.shown=0;

  goatName.push(this.name);
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


function updateStoreage() {

  let arrayString=JSON.stringify(User.allUser);


  localStorage.setItem('user',arrayString);


}

console.log(updateStoreage);

function getUserData() {


  let data=localStorage.getItem('user');

  let userData=JSON.parse(data);


  if (userData!==null) {

    User.allUser=userData;
  }


  // renderImages();

}

getUserData();






function generateRandomNumber() {

  return Math.floor(Math.random() * User.allUser.length);



}

//console.log(generateRandomNumber());




function renderImages() {

  leftImageRandom=generateRandomNumber();

  rightImageRandom=generateRandomNumber();

  middleImageRandom=generateRandomNumber();



  while ((leftImageRandom===rightImageRandom || leftImageRandom===middleImageRandom || middleImageRandom===rightImageRandom) || (timesRow.includes(leftImageRandom)||timesRow.includes(rightImageRandom)||timesRow.includes(middleImageRandom))){

    leftImageRandom=generateRandomNumber();
    middleImageRandom=generateRandomNumber();
    rightImageRandom=generateRandomNumber();



  }
  timesRow=[];
  timesRow.push(leftImageRandom);
  timesRow.push(rightImageRandom);
  timesRow.push(middleImageRandom);

  console.log(timesRow);
  User.allUser[leftImageRandom].shown++;
  User.allUser[rightImageRandom].shown++;
  User.allUser[middleImageRandom].shown++;

  //console.log(User.allUser[leftImageRandom].source);
  console.log(leftImageRandom,rightImageRandom,middleImageRandom);


  leftImagesElement.src=User.allUser[leftImageRandom].source;

  rightImagesElement.src=User.allUser[rightImageRandom].source;

  middleImagesElement.src=User.allUser[middleImageRandom].source;

}


renderImages();
console.log(renderImages);


images.addEventListener('click',userClick);





function userClick(event) {

  userAttempts++;

  //console.log(userAttempts);



  if (userAttempts<=maxAttempts) {


    if (event.target.id==='left') {
      //console.log(leftImagesElement);

      User.allUser[leftImageRandom].votes++;
      renderImages();

    }else if (event.target.id==='right') {

      User.allUser[rightImageRandom].votes++;
      renderImages();

    }else if (event.target.id==='middle'){

      User.allUser[middleImageRandom].votes++;
      renderImages();

    }else{

      alert('please make sure to click to images ..!');


    }

    //console.log(User.allUser);

  }

  else{


    images.removeEventListener('click',userClick);

    for (let i = 0; i < User.allUser.length; i++) {
      votes.push(User.allUser[i].votes);
      shown.push(User.allUser[i].shown);




      button.addEventListener('click',buttonClick);

      updateStoreage();
      // getUserData();


    }

    chart();
  }




}

let button=document.getElementById('button');




function buttonClick() {


  let list=document.getElementById('result-list');


  for (let i = 0; i < User.allUser.length; i++) {
    let userResults=document.createElement('li');

    list.appendChild(userResults);

    userResults.textContent=`${User.allUser[i].name} has ${User.allUser[i].shown} with ${User.allUser[i].votes}`;
    //console.log('hello');



  }

  button.removeEventListener('click',buttonClick);
  // updateStoreage();


}


function chart() {
  console.log(votes);
  //console.log(shown);
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels:goatName,
      datasets: [{
        label: '# of Votes',
        data:votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Shown',
        data:shown,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}





// -----------------comments-------------------

// let list=document.getElementById('result-list');


// for (let i = 0; i < User.allUser.length; i++) {
//   let userResults=document.createElement('li');

//   list.appendChild(userResults);

//   userResults.textContent=`${User.allUser[i].name} has ${User.allUser[i].shown} with ${User.allUser[i].votes}`;
//   //console.log('hello');
// }
