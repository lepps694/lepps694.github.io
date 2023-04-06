// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(function(item) {
		


		// This can get annoying, so we can use “template literals” instead

		const itemDetails =
		`	
		<a href="${item.link}">
		<li class="book">
		<img class="img1" src="${item.img}"/>
		<img class="img2" src="${item.img2}"/>
		</li>
		</a>
		`
	collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
	



		// const itemDetails =
		// 	`	
		// 	<a href="${item.link}">
		// 	<li class="book">
		// 	<img class="img1" src="${item.img}"/>
		// 	<img class="img2" src="${item.img2}"/>
		// 		<p class="title">${item.title}</p>
		// 		<p class="author"> Author: ${item.author}</p>
		// 		<p class="released">Released: ${item.year}</p>
		// 		<p class="genre">${item.genre}</p>
		// 		<p class="owner">Owner: ${item.owner}</p>
		// 		<p class="pages">Pages: ${item.pages}</p>
		// 		<p class="status">Status: ${item.status}</p>
		// 		<p class="currentpage">Currently on page: ${item.CurrentPage}</p>
		// 		<p class="thoughts">${item.thoughts}</p>
		// 	</li>
		// 	</a>
		// 	`
		// collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert


		// collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



fetch('assets/collection.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})

///////////////////////////////////////////
