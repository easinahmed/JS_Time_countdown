const banner = document.getElementById('offerBanner');
const closeBtn = document.getElementById('closeBanner');
const countdownEl = document.getElementById('countdown');

// এখন থেকে 2 দিন 10 ঘন্টা 11 মিনিট 10 সেকেন্ড পরে শেষ হবে
let endTime = new Date();
endTime.setSeconds(
  endTime.getSeconds() + 
  (2 * 24 * 60 * 60) +   // 2 দিন
  (10 * 60 * 60) +       // 10 ঘন্টা
  (11 * 60) +            // 11 মিনিট
  10                     // 10 সেকেন্ড
);

let timer = setInterval(() => {
  let now = new Date();
  let distance = endTime - now;

  if (distance <= 0) {
    clearInterval(timer);
    countdownEl.innerHTML = "⏰ Offer Ended!";
    return;
  }

  // সরাসরি new Date(distance) ব্যবহার করলাম
  let timeLeft = new Date(distance);

  let days = timeLeft.getUTCDate() - 1;   // getUTCDate() 1 থেকে শুরু করে
  let hours = timeLeft.getUTCHours();
  let minutes = timeLeft.getUTCMinutes();
  let seconds = timeLeft.getUTCSeconds();

  countdownEl.innerHTML =
    days + " Day : " + hours + " Hrs : " + minutes + " Min : " + seconds + " Sec";
}, 1000);

// close button
closeBtn.addEventListener('click', () => {
  banner.style.display = 'none';
});
// প্রথমে ব্যানার দেখানো হবে
setTimeout(() => {
    
    banner.style.display = 'block';
}, 2000);