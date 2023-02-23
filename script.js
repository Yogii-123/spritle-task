const users = [
    { username: "master", password: "master@123", role: "master" },
    { username: "student", password: "student@123", role: "student" },
  ];
  
  let actualuser = null;
  let Activitylog = [];

  function signup(){
    //     if(email!=="  "||emailpass!=="  "){
    //       document.getElementById('signup-form').style.display='block';
    //       document.getElementById('login-form').style.display='none';
    // }
               document.getElementById('signup-form').style.display='none';
          document.getElementById('login-form').style.display='block';
     }
     
      function cancelbtn(){
        document.getElementById('title').style.display='block';
        document.getElementById('signup-form').style.display='none';
      }
  


  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = userfun(username, password);
    if (user) {
      actualuser = user;
      document.getElementById("login-form").style.display = "none";
      if (actualuser.role === "master") {
        document.getElementById("master-section").style.display = "block";
      } else {
        document.getElementById("student-section").style.display = "block";
        renderActivitylog();
      }
      document.getElementById("logout-section").style.display = "block";
    } else {
      alert("Invalid username or password");
    }
  }

  function logout() {
    actualuser = null;
    Activitylog = [];
    document.getElementById("master-section").style.display = "none";
    document.getElementById("student-section").style.display = "none";
    document.getElementById("logout-section").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }


  function userfun(username, password) {
    const user = users.find(
      u => u.username === username && u.password === password
    );
    return user;
  }



  let expression = function (number,operation) {
    if (!operation)
        return number;
        return operation(number);
}

function zero(operation) { return expression(0, operation) }
function one(operation) { return expression(1, operation) }
function two(operation) { return expression(2, operation) }
function three(operation) { return expression(3, operation) }
function four(operation) { return expression(4, operation) }
function five(operation) { return expression(5, operation) }
function six(operation) { return expression(6, operation) }
function seven(operation) { return expression(7, operation) }
function eight(operation) { return expression(8, operation) }
function nine(operation) { return expression(9, operation) }

function plus(rightOperand) {
    return function (leftOperand) {
        return leftOperand + rightOperand;
    }
}
function minus(rightOperand) {
    return function (leftOperand) {
        return leftOperand - rightOperand;
    }
}
function times(rightOperand) {
    return function (leftOperand) {
        return rightOperand * leftOperand;
    }
}
function divided_by(rightOperand) {
    return function (leftOperand) {
        return leftOperand / rightOperand;
    }
}
  

  function submit(){
    const input1=document.getElementById("input");
    const input=input1.value;
    const output=eval(input);
    document.getElementById('output').innerHTML=output;
    document.getElementById('log').innerHTML= `<li>${input} = ${output}</li>` ;
} 
  
  function renderActivitylog() {
    Activitylog.forEach(activity=>{})}




  

    

