window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("taskbar").style.top = "0";
  } else {
    document.getElementById("taskbar").style.top = "-50px";
  }
}


function onClick()
{
  document.getElementById("contactus");
  alert("Our number: +919867453215");
}


const firebaseConfig = {
  apiKey: "AIzaSyBQ-ASVf_o-c506tcYMg-nnWeeE8lzte2g",
  authDomain: "bangloretravel.firebaseapp.com",
  databaseURL: "https://bangloretravel-default-rtdb.firebaseio.com",
  projectId: "bangloretravel",
  storageBucket: "bangloretravel.appspot.com",
  messagingSenderId: "471083951875",
  appId: "1:471083951875:web:144ec9a8f32dce8e89eb36"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var bangloretravelDB = firebase.database().ref('bangloretravel');

document.getElementById("myformid").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  var fname = getElementVal('FirstName');
  var lname = getElementVal('LastName');
  var email = getElementVal('email');
  var contact = getElementVal('cno');
  var city = getElementVal('city');
  var state = getElementVal('state');
  var pinc = getElementVal('pincode');

  saveMessages(fname, lname, email, contact, city, state, pinc);
}

const saveMessages = (fname, lname, email, contact, city, state, pinc) => {
  var newContactForm = bangloretravelDB.push();

  newContactForm.set({
    firstName: fname,
    lastName: lname,
    email: email,
    contact: contact,
    city: city,
    state: state,
    pincode: pinc
  });

  // Reset the form after saving
  document.getElementById("myformid").reset();
};

