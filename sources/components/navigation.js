class Navigation {
	constructor() {
		this.GUI = {
			header: document.getElementById('header'),
			navDesktop: document.getElementById('navDesktop'),
			navMobile: document.getElementById('navMobile'),
			hamburger: document.getElementById('hamburger'),
			close: document.getElementById('close'),
		};
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
		this.GUI.hamburger.addEventListener('click', this._openMobileNav);
		this.GUI.close.addEventListener('click', this._closeMobileNav);
	};

	closeListeners = () => {
		this.GUI.hamburger.removeEventListener('click', this._openMobileNav);
		this.GUI.close.removeEventListener('click', this._closeMobileNav);
	};

	_openMobileNav = () => {
		document.body.style.height = '100vh';
		document.body.style.overflowY = 'hidden';
		this.GUI.header.style.visibility = 'hidden';
		this.GUI.navMobile.style.display = 'block';
		window.requestAnimationFrame(() => (this.GUI.navMobile.style.opacity = 1));
	};

	_closeMobileNav = () => {
		document.body.style.height = 'auto';
		document.body.style.overflowY = 'auto';
		this.GUI.header.style.visibility = 'visible';
		window.requestAnimationFrame(() => (this.GUI.navMobile.style.opacity = 0));
		this.GUI.navMobile.style.display = 'none';
	};
}
