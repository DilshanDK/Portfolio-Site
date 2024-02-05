function contect() {
    window.location.href = "contact.html";
}
function submit() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    const valName = /^[a-zA-Z]+$/;
    const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let namePath = document.getElementById('name');
    let emailPath = document.getElementById('email');
    let phonePath = document.getElementById('phone');

    if (name == "" || email == "" || phone == "") {

        alert("Please Enter Data");
    } else {
     
        if (!valName.test(name)) {
            namePath.style.border = "3px solid red";
        } else if (!valEmail.test(email)) {
            emailPath.style.border = "3px solid red";

        } else if (phone.length > 10 || phone.length < 10) {
            phonePath.style.border = "3px solid red";

        } else {
            alert("Submitted successfully");
            window.location.href="index.html";
        }
    }
}

function skills(){

    let circleProgress1=document.querySelector(".projects1");
    let circleProgress2=document.querySelector(".projects2");
    let circleProgress3=document.querySelector(".projects3");

    let value1=document.querySelector(".value1");
    let value2=document.querySelector(".value2");
    let value3=document.querySelector(".value3");


    let start1=0,start2=0,start3=0;
    let end1=70;
    let end2=80;
    let end3=60;

    let speed=50;

    let progress1 =setInterval(() =>{

        start1++;
        value1.textContent=`${start1}%`;
        circleProgress1.style.background=`conic-gradient(white ${start1*3.6}deg, #042c7c 0deg)`;
        if(start1==end1){
            clearInterval(progress1);
        }
        
    },speed);
     let progress2 =setInterval(() =>{

        start2++;
        value2.textContent=`${start2}%`;
        circleProgress2.style.background=`conic-gradient(white ${start2*3.6}deg, #042c7c 0deg)`;
        if(start2==end2){
            clearInterval(progress2);
        }
        
    },speed);
     let progress3 =setInterval(() =>{

        start3++;
        value3.textContent=`${start3}%`;
        circleProgress3.style.background=`conic-gradient(white ${start3*3.6}deg, #042c7c 0deg)`;
        if(start3==end3){
            clearInterval(progress3);
        }
    },speed);
}

function menu(){
    if(document.getElementById('myLinks').style.display=='none'){
        document.getElementById('myLinks').style.display='block';
        document.getElementById('menu').style.color='black';

    }else{
        document.getElementById('myLinks').style.display='none';
        document.getElementById('menu').style.color='white';

    }
}