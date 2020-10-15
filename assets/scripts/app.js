const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "CSS3",
				weight: 8
			}, {
				text: "HTML5",
				weight: 14
			}, {
				text: "Javascript",
				weight: 14
			}, {
				text: "Reactjs",
				weight: 10
			}, {
				text: "Nodejs",
				weight: 14
			}, {
				text: "Expressjs",
				weight: 14
			}, {
				text: "Django",
				weight: 14
			}, {
				text: "Python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "C",
				weight: 7
			}, {
				text: "C++",
				weight: 7
			},{
				text: "Cyber Security",
				weight: 7
			}, {
				text: "MySQL",
				weight: 9
			}, {
				text: "MongoDB",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "solve problems."
			],
			stringsElement: null,
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
