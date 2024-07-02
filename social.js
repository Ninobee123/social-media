var settingsmenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn");
// how to make a dropdown menu
function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");

}; 
//you need to apply the dark theme in this function
darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on"); //for dark mode toggling
  document.body.classList.toggle("dark-theme"); //insert the dark theme class here

  if (localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme","dark");
  }
  else{
    localStorage.setItem("theme","light");
  }
}



if(localStorage.getItem("theme") == "light"){
  //if the value is light then we'd turn off the dark button so it will be lightmode
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme"); //for removing the dark mode
}
//if the value is dark thne turn off lightmode so it will be darkmode
else if(localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on"); //to add the darkmode button
  document.body.classList.add("dark-theme"); //to make the webpage remain in darkmode
}

else {
  localStorage.setItem("theme","light"); //this localstrage will store the Value as light if you visit for the first time
}
