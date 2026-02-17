

document.querySelectorAll('.nav-bar a').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('current');
  }
});



/* Home page Typing Handling */

const homeIdentity = document.querySelector('.home-main .identity');
if(homeIdentity){
  const lines = [
    {tag: 'h2', text: "Hello, I am Shanto"},
    {tag: 'p', text: "An Undergraduate Software Engineering student exploring web development and a problem solver."}
  ];

 
  homeIdentity.innerHTML = "";

  let lineIndex = 0;  
  let charIndex = 0;  

  function typeLine(){

    if(lineIndex < lines.length){
     
      if(charIndex === 0){
        const el = document.createElement(lines[lineIndex].tag);
        el.classList.add('typing-line');
        homeIdentity.appendChild(el);
      }

      const currentEl = homeIdentity.querySelectorAll('.typing-line')[lineIndex];
      currentEl.innerHTML += lines[lineIndex].text.charAt(charIndex);
      charIndex++;

      if(charIndex < lines[lineIndex].text.length){
        setTimeout(typeLine, 50); 
      } else {
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 300); 
      }
    }
  }

  typeLine();
}


/* Toggle button handling */

const toggleButton = document.getElementById("themeToggle");
const icon = toggleButton.querySelector("i");


if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleButton.style.backgroundColor = "#f0f0f0";
  icon.classList.replace("fa-sun", "fa-moon");
  icon.style.color = "#333333";
} else {
  toggleButton.style.backgroundColor = "#333333";
  icon.classList.replace("fa-moon", "fa-sun");
  icon.style.color = "#FFD700";
}


toggleButton.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleButton.style.backgroundColor = "#f0f0f0";
    icon.classList.replace("fa-sun", "fa-moon");
    icon.style.color = "#333333";
    localStorage.setItem("theme", "light");
  } else {
    toggleButton.style.backgroundColor = "#333333";
    icon.classList.replace("fa-moon", "fa-sun");
    icon.style.color = "#FFD700";
    localStorage.setItem("theme", "dark");
  }
});
