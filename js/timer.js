const banner = document.getElementById('offerBanner');
const closeBtn = document.getElementById('closeBanner');
const countdownEl = document.getElementById('countdown');
const endDate = "30 August 2025 09:54:00 PM"

// document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff <= 0) {

    // clearInterval(timer);
    countdownEl.innerHTML = "⏰ Offer Ended!";
    return;
    }

    // convert into days;
    let days = Math.floor(diff / 3600 / 24);
    let hours = Math.floor(diff / 3600) % 24;
    let minutes = Math.floor(diff / 60) % 60;
    let sec = Math.floor(diff) % 60;


  countdownEl.innerHTML =
    days + " Day : " + hours + " Hrs : " + minutes + " Min : " + sec + " Sec";
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

let timer = setInterval(
    () => {
        clock()
    },
    1000
)

closeBtn.addEventListener('click', () => {
  banner.style.display = 'none';
});

setTimeout(() => {
    
    banner.style.display = 'block';
}, 2000);

setInterval(() => {
    if (banner.style.display === 'none') {
        banner.style.display = 'block';
        
    }
    
}, 5000);
