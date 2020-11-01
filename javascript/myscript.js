



		// Xử lý vẽ tim
		var getHeartBeat = document.querySelectorAll('.heart polyline');
		var getHeart = document.querySelectorAll(' .heart path');
		var get = document.querySelector(' .heart');
		var timmau = document.querySelector('.heart .timmau');


		timmau.style.opacity = "0";
		var theTime = anime.timeline();
		theTime.add({
			targets: getHeartBeat,
			delay: 10000,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 2000,

		});
		theTime.add({
			targets: getHeart,
			offset: 12000,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 1000,

		});