class Menu {
	constructor() {
		this.GUI = {
			links: [...document.querySelectorAll('.menu a')],
		};
		this.state = 0;
		this.initGlobalListeners();
		this.initListeners();
	}

	initGlobalListeners = () => {
		const rtAnimationFrame =
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;
		window.requestAnimationFrame = rtAnimationFrame;

		document.addEventListener('visibilitychange', () => {
			document.visibilityState == 'hidden'
				? this.closeListeners()
				: this.initListeners();
		});
	};

	initListeners = () => {
		this.GUI.links[0].addEventListener('click', this._simpleBookmarking);
		this.GUI.links[1].addEventListener('click', this._speedySearching);
		this.GUI.links[2].addEventListener('click', this._easySharing);
	};

	closeListeners = () => {
		this.GUI.links[0].removeEventListener('click', this._simpleBookmarking);
		this.GUI.links[1].removeEventListener('click', this._speedySearching);
		this.GUI.links[2].removeEventListener('click', this._easySharing);
	};

	_simpleBookmarking = () => {
		console.log('simple bookmarink');
	};

	_speedySearching = () => {
		console.log('speedy searching');
	};

	_easySharing = () => {
		console.log('easy sharing');
	};
}
