// Set the date you're counting down to
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
  
  // Get current date and time
  const now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  const distance = countdownDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the results in the respective HTML elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is over, display some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
  
}, 1000);
