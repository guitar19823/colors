import ColorPalettesHead from './js/ColorPalettesHead.js';
import ColorPaletteNav from './js/ColorPaletteNav.js';
import CurrentPalette from './js/CurrentPalette.js';
import ColorPalettesLibrary from './js/ColorPalettesLibrary.js';
import ColorPalettesSettings from './js/ColorPalettesSettings.js';
import './css/colorPalettes.css';

export default class ColorPalettes {
	constructor(colorsData, closeColorPalettes, activeColors) {
		this.colorPalettes = document.createElement('div');
		this.closeColorPalettes = closeColorPalettes;

		this.state = {
			openLibraries: true,
			openSettings: false,
			colorsData: colorsData,
			activeColors: activeColors
		}

		return this.render();
	}

	newColorsData(newColors, colorsId) {
		const oldColorsData = this.state.colorsData;

		const newColorsData = [
			...oldColorsData.slice(0, +colorsId),
			newColors,
			...oldColorsData.slice(+colorsId + 1)
		];

		this.setState({
			openLibraries: this.state.openLibraries,
			openSettings: this.state.openSettings,
			colorsData: newColorsData,
			activeColors: this.state.activeColors
		});
	}

	linkHandleClick() {
		this.setState({
			openLibraries: !this.state.openLibraries,
			openSettings: !this.state.openSettings,
			colorsData: this.state.colorsData,
			activeColors: this.state.activeColors
		});
	}

	colorsChange(activeColors) {
		this.setState({
			openLibraries: this.state.openLibraries,
			openSettings: this.state.openSettings,
			colorsData: this.state.colorsData,
			activeColors: activeColors
		});
	}

	setState(newState) {
		this.state = newState;

		while (this.colorPalettes.firstChild) {
			this.colorPalettes.removeChild(this.colorPalettes.firstChild);
		}

		this.render();
	}

	render() {
		const { openLibraries, openSettings, colorsData, activeColors } = this.state;

		this.colorPalettes.className = 'color-palettes';

		this.colorPalettes.appendChild(ColorPalettesHead(
			colorsData,
			this.closeColorPalettes
		));
		this.colorPalettes.appendChild(new ColorPaletteNav(
			openLibraries,
			openSettings,
			this.linkHandleClick.bind(this)
		));
		this.colorPalettes.appendChild(CurrentPalette(
			colorsData[activeColors]
		));

		if (openLibraries) {
			this.colorPalettes.appendChild(ColorPalettesLibrary(
				colorsData,
				this.colorsChange.bind(this)
			));
		} else {
			this.colorPalettes.appendChild(new ColorPalettesSettings(
				colorsData,
				activeColors,
				this.newColorsData.bind(this)
			));
		}

		return this.colorPalettes;
	}
};