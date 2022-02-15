document.addEventListener('DOMContentLoaded', function () {
	// dropdown start
	const drops = document.querySelectorAll('.dropdown');

	drops.forEach(function(el) {
		el.addEventListener('click', function(evt) {
			const header = this.querySelector('.dropdown__header');

			if (this.classList.contains('active') && evt.composedPath().includes(header)) {
				this.classList.remove('active');
			} else {
				this.classList.add('active');
			}
		})
	});

	document.addEventListener( 'click', function(evt) {
		drops.forEach(function(el) {
			const withinBoundaries = evt.composedPath().includes(el);

			if (!withinBoundaries) {
				el.classList.remove('active');
			}
		});
	});
	// dropdown end

	// tooltip start
	const initElements = document.querySelectorAll('[data-tooltip]');

	initElements.forEach(function(el) {
		const title = el.dataset.tooltip;

		el.addEventListener('mouseenter', function() {
			let coords = el.getBoundingClientRect();
			let tooltip = document.createElement('div');
			tooltip.style.top = coords.top + 35 + "px";
			tooltip.style.left = coords.width / 2 + coords.left - 14 + "px";
			tooltip.classList.add('tooltip');
			tooltip.innerText = title;
			document.body.append(tooltip);
		});

		el.addEventListener('mouseleave', function() {
			document.querySelector('.tooltip').remove();
		});
	})
	// tooltip end
});
