const firebaseConfig = {
    apiKey: "AIzaSyBt2LHIKlyXSf4jXd31nFOS9ETIYKLTooU",
    authDomain: "kwitter-website-c9b17.firebaseapp.com",
    projectId: "kwitter-website-c9b17",
    storageBucket: "kwitter-website-c9b17.appspot.com",
    messagingSenderId: "695349409699",
    appId: "1:695349409699:web:50e7c12ebefa8c133bcc16"
  };
  
  
 firebase.initializeApp(Firebaseconfig)

  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/"),child(user_name).update({
        purpose : "adding user"
    });

}