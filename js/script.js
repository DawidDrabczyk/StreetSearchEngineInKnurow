const searchInput = document.querySelector(".search-input");
const streetsItems = document.querySelectorAll(".streets-item");

const searchHandler = e => {
	const text = e.target.value.toLowerCase();

	streetsItems.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};
searchInput.addEventListener("input", searchHandler);
