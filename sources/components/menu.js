class Menu {
	constructor() {
		this.information = Object.freeze({
			book: {
				title: 'Bookmark in one click',
				content:
					'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
			},
			search: {
				title: 'Intelligent search',
				content:
					'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
			},
			share: {
				title: 'Share your bookmarks',
				content:
					'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
			},
		});
		this.GUI = {
			links: [...document.querySelectorAll('.menu a')],
			image: document.getElementById('menuImage'),
			title: document.getElementById('menuTitle'),
			content: document.getElementById('menuContent'),
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
		if (this.state !== 0) {
			this.GUI.links[this.state].classList.remove('link-active');
			this.GUI.links[0].classList.add('link-active');
			this.GUI.image.src = './assets/images/illustration-features-tab-1.svg';
			this.GUI.title.textContent = this.information.book.title;
			this.GUI.content.textContent = this.information.book.content;
			this.state = 0;
		}
	};

	_speedySearching = () => {
		if (this.state !== 1) {
			this.GUI.links[this.state].classList.remove('link-active');
			this.GUI.links[1].classList.add('link-active');
			this.GUI.image.src = './assets/images/illustration-features-tab-2.svg';
			this.GUI.title.textContent = this.information.search.title;
			this.GUI.content.textContent = this.information.search.content;
			this.state = 1;
		}
	};

	_easySharing = () => {
		if (this.state !== 2) {
			this.GUI.links[this.state].classList.remove('link-active');
			this.GUI.links[2].classList.add('link-active');
			this.GUI.image.src = './assets/images/illustration-features-tab-3.svg';
			this.GUI.title.textContent = this.information.share.title;
			this.GUI.content.textContent = this.information.share.content;
			this.state = 2;
		}
	};
}
