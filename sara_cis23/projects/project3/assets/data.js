// Function to render your items
function renderItems(data) {
	// Create handles to differnt boroughs
	const manhattanEl = document.getElementById('manhattan-list')
	const brooklynEl = document.getElementById('brooklyn-list')
	const bronxEl = document.getElementById('bronx-list')
	const queensEl = document.getElementById('queens-list')

	// Create lists for different boroughts
	let manhattanList = [];
	let brooklynList =[];
	let bronxList =[];
	let queensList =[];

	// Sort data by boroough
	data.forEach(function(item) {
		if (item.borough == 'Manhattan') {
			manhattanList.push(item);
		} else if (item.borough == 'Brooklyn') {
			brooklynList.push(item);
		} else if (item.borough == 'Bronx') {
			bronxList.push(item);
		} else if (item.borough == 'Queens') 
				queensList.push(item);
	});

	
	// Loop through each borough list, and create the html and append to borough handle
	manhattanList.forEach(function(item) {
		const itemDetails =
			`	
			<li class="artwork">
				<p class="title">${item.title}</p>
				<p class="artist"> Artist: ${item.artist}</p>
				<p class="partner">Partner: ${item.partner}</p>
				<p class="location">${item.location}</p>
				<p class="borough">${item.borough}</p>
				<p class="site">Site Type: ${item.site}</p>
				<p class="type">Project Type: ${item.type}</p>
				<p class="installed">Installed: ${item.installed}</p>
				<p class="removed">Removed${item.removed}</p>
				<p class="duration">Days On Site:${item.duration}</p>
				<div style="width: ${item.duration * 5}px; height: 10px; background: blue;"></div>
			</li>
			</a>
			`
		manhattanEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

	})

	brooklynList.forEach(function(item) {
		const itemDetails =
			`	
			<li class="artwork">
				<p class="title">${item.title}</p>
				<p class="artist"> Artist: ${item.artist}</p>
				<p class="partner">Partner: ${item.partner}</p>
				<p class="location">${item.location}</p>
				<p class="borough">${item.borough}</p>
				<p class="site">Site Type: ${item.site}</p>
				<p class="type">Project Type: ${item.type}</p>
				<p class="installed">Installed: ${item.installed}</p>
				<p class="removed">Removed${item.removed}</p>
				<p class="duration">Days On Site:${item.duration}</p>
				<div style="width: ${item.duration * 5}px; height: 10px; background: red;"></div>
			</li>
			</a>
			`
		brooklynEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

	})

	bronxList.forEach(function(item) {
		const itemDetails =
			`	
			<li class="artwork">
				<p class="title">${item.title}</p>
				<p class="artist"> Artist: ${item.artist}</p>
				<p class="partner">Partner: ${item.partner}</p>
				<p class="location">${item.location}</p>
				<p class="borough">${item.borough}</p>
				<p class="site">Site Type: ${item.site}</p>
				<p class="type">Project Type: ${item.type}</p>
				<p class="installed">Installed: ${item.installed}</p>
				<p class="removed">Removed${item.removed}</p>
				<p class="duration">Days On Site:${item.duration}</p>
				<div style="width: ${item.duration * 5}px; height: 10px; background: green;"></div>
			</li>
			</a>
			`
		bronxEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

	})

	queensList.forEach(function(item) {
		const itemDetails =
			`	
			<li class="artwork">
				<p class="title">${item.title}</p>
				<p class="artist"> Artist: ${item.artist}</p>
				<p class="partner">Partner: ${item.partner}</p>
				<p class="location">${item.location}</p>
				<p class="borough">${item.borough}</p>
				<p class="site">Site Type: ${item.site}</p>
				<p class="type">Project Type: ${item.type}</p>
				<p class="installed">Installed: ${item.installed}</p>
				<p class="removed">Removed${item.removed}</p>
				<p class="duration">Days On Site:${item.duration}</p>
				<div style="width: ${item.duration * 5}px; height: 10px; background: yellow;"></div>
			</li>
			</a>
			`
		queensEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

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


