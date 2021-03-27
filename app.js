const time = document.getElementById('time');
const formRow = document.querySelector('.form-section');
// const zone = document.getElementById('inputZone').value;
const zone = 'Asia';
const city = document.getElementById('city');

formRow.addEventListener('submit', showTime);

function showTime(e) {
  fetch(`http://worldtimeapi.org/api/timezone/${zone}/${city.value}`)
    .then(res => res.json())

    .then(data => {
      let hour = data.datetime.slice(11, 13);
          min = data.datetime.slice(14, 16);
          sec = data.datetime.slice(17, 19);

      const amPm = hour >= 12 ? 'PM' : 'AM';

      hour = hour % 12 || 12;

      time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}<span style="font-size: 80px; margin: 40px 0 0 40px"><sub>${amPm}</sub><span>`;

      setTimeout(showTime, 1000);
      
    })
    .catch(err => console.log(err));

    e.preventDefault();
}