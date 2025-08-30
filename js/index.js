// const banner = document.getElementById('offerBanner');
// const closeBtn = document.getElementById('closeBanner');
// const countdownEl = document.getElementById('countdown');

// let endTime = new Date();
// endTime.setSeconds(
//   endTime.getSeconds() + 
//   (2 * 24 * 60 * 60) + 
//   (10 * 60 * 60) +       
//   (11 * 60) +            
//   10                     
// );

// function counter() {
//   let now = new Date();
//   let distance = endTime - now;

//   if (distance <= 0) {
//     clearInterval(timer);
//     countdownEl.innerHTML = "⏰ Offer Ended!";
//     return;
//   }

//   let timeLeft = new Date(distance);

//   let days = timeLeft.getUTCDate() - 1;   
//   let hours = timeLeft.getUTCHours();
//   let minutes = timeLeft.getUTCMinutes();
//   let seconds = timeLeft.getUTCSeconds();

//   countdownEl.innerHTML =
//     days + " Day : " + hours + " Hrs : " + minutes + " Min : " + seconds + " Sec";
// }

// let timer = setInterval(counter, 1000);


// closeBtn.addEventListener('click', () => {
//   banner.style.display = 'none';
// });

// setTimeout(() => {
    
//     banner.style.display = 'block';
// }, 2000);

// setInterval(() => {
//     if (banner.style.display === 'none') {
//         banner.style.display = 'block';
        
//     }
    
// }, 5000);