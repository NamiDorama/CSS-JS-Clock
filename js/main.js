const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

function changeTime () {
	const date = new Date();
	
	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hours = date.getHours();

	sec.style.transform = `rotate(${seconds / 60 * 360}deg)`;
	min.style.transform = `rotate(${minutes / 60 * 360}deg)`;
	hour.style.transform = `rotate(${hours / 24 * 360}deg)`;

}

setInterval(changeTime, 1000);