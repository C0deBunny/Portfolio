function initAnimations() {
	const elements = document.querySelectorAll(".fade")

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show")
				} else {
					entry.target.classList.remove("show")
				}
			})
		},
		{ threshold: 0.2 }
	)

	elements.forEach((element) => observer.observe(element))
}

initAnimations()
