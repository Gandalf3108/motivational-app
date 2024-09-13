const initialItems = document.querySelectorAll(".movie-item");
initialItems.forEach (item => attachMovieItemEventListener(item) );

document.getElementById("movie-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("movie-title");
        const rating = document.getElementById("movie-rating");

        addMovieToList(title.value, rating.value);
        document.getElementById("movie-form").reset();
});

function addMovieToList(title, rating) {
        const movieList = document.getElementById("movie-list");
        const li = document.getElementById("li");
        
        li.classList = "movie-item";

        li.innerHTML = `
                        <div>
                                <h3>${title}</h3>
                                <span>Rating: <em>${rating}</em> </span>
                        </div>
                        <div class="buttons">
                                <button class="fav-btn">Add to favorites</button>
                                <button class="del-btn">Remove from the list</button>
                        </div>
                        `
        ;
        movieList.appendChild(li);
        attachMovieItemEventListener(li);
};

function attachMovieItemEventListener(li) {

        const movieList = document.getElementById("movie-list");

        li.querySelector(".fav-btn").addEventListener("click", function () {
                const prevListItem = li.previousElementSibling;

                if(prevListItem) {
                        movieList.insertBefore(li, movieList.firstChild);
                }
        });

        li.querySelector(".del-btn").addEventListener("click", function () {
                movieList.removeChild(li);
            });
};
