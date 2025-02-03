function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const barIcon = document.getElementById('bar');
    
    navLinks.classList.toggle("active");
    
    // Check if navLinks contains active class
    if (navLinks.classList.contains("active")) {
        barIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        barIcon.classList.replace("fa-xmark", "fa-bars");
    }
}
  

  const toggleNightMode = () => {
    document.body.classList.toggle("night-mode");
  
    // Save the theme preference in local storage
    const isNightMode = document.body.classList.contains("night-mode");
    localStorage.setItem("nightMode", isNightMode);
  
    // Toggle the moon/sun icon
    const moodIcon = document.getElementById("mood");
    moodIcon.classList.toggle("fa-moon");
    moodIcon.classList.toggle("fa-sun");
  };
  
  // Check local storage to keep user preference
  window.onload = () => {
    const savedTheme = localStorage.getItem("nightMode");
    if (savedTheme === "true") {
      document.body.classList.add("night-mode");
  
      // Change icon to sun if night mode is enabled
      const moodIcon = document.getElementById("mood");
      moodIcon.classList.remove("fa-moon");
      moodIcon.classList.add("fa-sun");
    }
  };
  
  // Attach event listener to the moon icon
  document.getElementById("mood").addEventListener("click", toggleNightMode);
  