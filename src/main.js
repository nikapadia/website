const collapsibleButton = document.querySelector('.collapsible-button');

if (collapsibleButton) {
	const collapsibleContent = document.getElementById(
		collapsibleButton.getAttribute('aria-controls')
	);
	const caret = collapsibleButton.querySelector('.caret');

	collapsibleButton.addEventListener('click', () => {
		const isOpen = collapsibleButton.getAttribute('aria-expanded') === 'true';
		collapsibleButton.setAttribute('aria-expanded', String(!isOpen));
		collapsibleContent.hidden = isOpen;
		caret.textContent = isOpen ? '▶' : '▼';
	});
}
