const Color = (background) => {
	const color = document.createElement('div');

	color.className = 'color';
	color.style.background = background;

	return color;
};

export default Color;