
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBOH_q5x04-CmONrL3NPUa8TZMGcqIK80Q",
  authDomain: "online-bookstore-320a2.firebaseapp.com",
  databaseURL: "https://online-bookstore-320a2-default-rtdb.firebaseio.com",
  projectId: "online-bookstore-320a2",
  storageBucket: "online-bookstore-320a2.appspot.com",
  messagingSenderId: "75380461916",
  appId: "1:75380461916:web:51802408f7dc5e1137b199",
  measurementId: "G-K8VSHQVDDC"
};




  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
	
  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Registered Successful");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Login Successful");
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
	  window.location='index.html';
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
     document.getElementById('user').innerHTML = 'Active User: '+email;
    }
    else{
      document.getElementById('user').innerHTML = 'Not Logged In';
    }
  })

 
    //  document.getElementById("user").innerHTML = "Active User "+email;