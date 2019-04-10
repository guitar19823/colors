import './footer.css';

const Footer = (colors) => {
	const footer = document.createElement('footer');

	footer.style.background = colors[7];

	footer.appendChild(Copyright());

	return footer;
};

const Copyright = () => {
	const copyright = document.createElement('p');
	const year = new Date().getFullYear();

	copyright.appendChild(document.createTextNode(`© Copyright ${year}.`));

	return copyright;
};

export default Footer;