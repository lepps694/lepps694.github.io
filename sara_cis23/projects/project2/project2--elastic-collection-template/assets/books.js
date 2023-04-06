function renderItems(filteredBooks, items) {
    filteredBooks.innerHTML="";
    items.forEach(function(item){
        const bookDetails = `
            <li class="book">
                <img class="img1" src="${item.img}"/>
                <img class="img2" src="${item.img2}"/>
                <p class="title">${item.title}</p>
                <p class="author">Author: ${item.author}</p>
                <p class="released">Released: ${item.year}</p>
                <p class="genre">${item.genre}</p>
                <p class="owner">Owner: ${item.owner}</p>
                <p class="pages">Pages: ${item.pages}</p>
                <p class="status">Status: ${item.status}</p>
                <p class="currentpage">Currently on page: ${item.CurrentPage}</p>
                <p class="thoughts">${item.thoughts}</p>
            </li>
        `;
        filteredBooks.insertAdjacentHTML('beforeend', bookDetails);
    });
}

function filterByTitle(title) {
    fetch('assets/collection.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const filteredItems = data.filter(function(item) {
                return item.title === title;
            });
            const filteredBooks = document.getElementById('books');
            renderItems(filteredBooks, filteredItems);
        });
}

