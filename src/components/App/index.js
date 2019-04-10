import ColorPalettes from '../ColorPalettes';
import colorsData from '../ColorPalettes/data/colorsData.js';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Cookies from 'js-cookie';
import './app.css';

export default class App {
	constructor() {
		this.app = document.createElement('container');

		this.state = {
			colorPalettesIsNotOpen: true,
			colorsData: colorsData
		};

		this.setCookie();

		return this.render();
	}

	setCookie() {
		if (Cookies.get('activeColors') === undefined) {
			Cookies.set('activeColors', 4, { expires: 7, path: '/' });
		}
	}

	openColorPalettes() {
		if (this.state.colorPalettesIsNotOpen) {
			this.setState({
				colorPalettesIsNotOpen: false,
				colorsData: this.state.colorsData
			});

			this.app.appendChild(new ColorPalettes(
				this.state.colorsData,
				this.closeColorPalettes.bind(this),
				Cookies.get('activeColors')
			));
		}
	}

	closeColorPalettes(newColorsData) {
		this.setState({
			colorPalettesIsNotOpen: true,
			colorsData: newColorsData
		});
	}

	setState(newState) {
		this.state = newState;

		while (this.app.firstChild) {
			this.app.removeChild(this.app.firstChild);
		}

		this.render();
	}

	render() {
		this.app.className = 'app';
		const { colors } = this.state.colorsData[Cookies.get('activeColors')];

		this.app.appendChild(Header(colors));
		this.app.appendChild(Main(
			colors,
			this.openColorPalettes.bind(this)
		));
		this.app.appendChild(Footer(colors));

		return this.app;
	}
};