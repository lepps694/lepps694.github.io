function renderItems(filteredList, items) {
    filteredList.innerHTML = "";

    items.forEach(function(item) {
        const itemDetails = `
            <a href="${item.link}">
                <li class="book">
                    <img class="img1" src="${item.img}"/>
                    <img class="img2" src="${item.img2}"/>
                </li>
            </a>
        `;
        filteredList.insertAdjacentHTML('beforeend', itemDetails);
    });
}
////////////////////////////////////////////////////////////
function filterByOwner(owner) {
    fetch('assets/collection.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const filteredItems = data.filter(function(item) {
                return item.owner === owner;
            });
            const filteredList = document.getElementById('filtered');
            renderItems(filteredList, filteredItems);
        });
}

const saraBtn = document.getElementById('sara-btn');
saraBtn.addEventListener('click', function() {
    filterByOwner('Sara');
});

const camilleBtn = document.getElementById('camille-btn');
camilleBtn.addEventListener('click', function() {
    filterByOwner('Camille');
});
/////////////////////////////////////////////////
function filterByGenre(genre) {
    fetch('assets/collection.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const filteredGenres = data.filter(function(item) {
                return item.genre === genre;
            });
            const filteredList = document.getElementById('filtered');
            renderItems(filteredList, filteredGenres);
        });
}

const fictionBtn = document.getElementById('fiction-btn');
fictionBtn.addEventListener('click', function() {
    filterByGenre('Fiction');
});

const NonFictionBtn = document.getElementById('non-fiction-btn');
NonFictionBtn.addEventListener('click', function() {
    filterByGenre('Non-Fiction');
});

const ArtBtn = document.getElementById('art-btn');
ArtBtn.addEventListener('click', function() {
    filterByGenre('Art');
});

const CookingBtn = document.getElementById('cooking-btn');
CookingBtn.addEventListener('click', function() {
    filterByGenre('Cooking');
});

/////////////////////////////////////////////////
function filterByStatus(status) {
    fetch('assets/collection.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const filteredStatus = data.filter(function(item) {
                return item.status === status;
            });
            const filteredList = document.getElementById('filtered');
            renderItems(filteredList, filteredStatus);
        });
}

const startedBtn = document.getElementById('started-btn');
startedBtn.addEventListener('click', function() {
    filterByStatus('started');
});

const finishedBtn = document.getElementById('finished-btn');
finishedBtn.addEventListener('click', function() {
    filterByStatus('finished');
});

const unbegunBtn = document.getElementById('unbegun-btn');
unbegunBtn.addEventListener('click', function() {
    filterByStatus('unbegun');
});

