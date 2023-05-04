// Function to render your items
function renderItems(data) {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('data')

	// Loop through each item in the collection array
	data.forEach(function(item) {
		


		This can get annoying, so we can use “template literals” instead


		const itemDetails =
			`	
			<li class="artwork">
				<p class="title">${item.title}</p>
				<p class="artist"> Artist: ${item.artist}</p>
				<p class="partner">Partner: ${item.partner}</p>
				<p class="location">${item.location}</p>
				<p class="borough">: ${item.borough}</p>
				<p class="site">Site Type: ${item.site}</p>
				<p class="type">Project Type: ${item.type}</p>
				<p class="installed">Installed: ${item.installed}</p>
				<p class="removed">Removed${item.removed}</p>
			</li>
			</a>
			`
		dataList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

	})
}



fetch('assets/data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(data){
		// And passes the data to the function, above!
		renderItems(data) // In reverse order
	})