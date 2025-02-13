// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
scrollTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

// ----------


document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const query = document.getElementById("searchInput").value.toLowerCase().trim(); // Get user input
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Clear previous results

    // List of books (title, genre, and author)
    const books = [
        { title: "To Kill a Mockingbird", genre: "Fiction", author: "Harper Lee", link: "fbook1.html" },
        { title: "1984", genre: "Fiction", author: "George Orwell", link: "fbook2.html" },
        { title: "Pride and Prejudice", genre: "Fiction", author: "Jane Austen", link: "fbook3.html" },
        { title: "The Great Gatsby", genre: "Fiction", author: "F. Scott Fitzgerald", link: "fbook4.html" },
        { title: "The catcher in The Rye", genre: "Fiction", author: "J.D. Salinger", link: "fbook5.html" },
        { title: "The Alchemist", genre: "Fiction", author: "Paulo Coelho", link: "fbook6.html" },
        { title: "Jane Eyre", genre: "Fiction", author: "Charlotte Brontë", link: "fbook7.html" },
        { title: "Moby-Dick", genre: "Fiction", author: "Herman Melville", link: "fbook8.html" },
        { title: "The Road", genre: "Fiction", author: "Cormac McCarthy", link: "fbook9.html" },
        { title: "Little Women", genre: "Fiction", author: "Louisa May Alcott", link: "fbook10.html" },

        { title: "Educated", genre: "Non-Fiction", author: "Tara Westover", link: "nonfiction1.html" },
        { title: "Sapiens", genre: "Non-Fiction", author: "Yuval Noah Harari", link: "nonfiction2.html" },
        { title: "Becoming", genre: "Non-Fiction", author: "Michelle Obama", link: "nonfiction3.html" },
        { title: "Immortal Life of Henrietta Lacks", genre: "Non-Fiction", author: "Rebecca Skloot", link: "nonfiction4.html" },
        { title: "The Wright Brothers", genre: "Non-Fiction", author: "David McCullough", link: "nonfiction5.html" },
        { title: "The Diary of A Young Girl", genre: "Non-Fiction", author: "Anne Frank", link: "nonfiction6.html" },
        { title: "The Power of Habbit", genre: "Non-Fiction", author: "Charles Duhigg", link: "nonfiction7.html" },
        { title: "Atomic Habits", genre: "Non-Fiction", author: "James Clear", link: "nonfiction8.html" },
        { title: "Outliers", genre: "Non-Fiction", author: "Malcolm Gladwell", link: "nonfiction9.html" },
        { title: "Thinking, Fast and Slow", genre: "Non-Fiction", author: "Daniel Kahneman", link: "nonfiction10.html" },

        { title: "The Girl With The Dragon Tattoo", genre: "Mystery", author: "Stieg Larsson", link: "mystery1.html" },
        { title: "Gone Girl", genre: "Mystery", author: "Gillian Flynn", link: "mystery2.html" },
        { title: "The Silent Patient", genre: "Mystery", author: "Alex Michaelides", link: "mystery3.html" },
        { title: "Big Little Lies", genre: "Mystery", author: "Liane Moriarty", link: "mystery4.html" },
        { title: "The Woman in the Window", genre: "Mystery", author: "A.J. Finn", link: "mystery5.html" },
        { title: "The Reversal", genre: "Mystery", author: "Michael Connelly", link: "mystery6.html" },
        { title: "Sharp Objects", genre: "Mystery", author: "Gillian Flynn", link: "mystery7.html" },
        { title: "In The Woods", genre: "Mystery", author: "Tana French", link: "mystery8.html" },
        { title: "The Cuckoo's Calling", genre: "Mystery", author: "Robert Galbraith", link: "mystery9.html" },
        { title: "Before I Go To Sleep", genre: "Mystery", author: "S.J. Watson", link: "mystery10.html" },

        { title: "Dune", genre: "Sci-Fi", author: "Frank Herbert", link: "scifi1.html" },
        { title: "Neuromancer", genre: "Sci-Fi", author: "William Gibson", link: "scifi2.html" },
        { title: "The Left Hand of Darkness", genre: "Sci-Fi", author: "Ursula K. Le Guin", link: "scifi3.html" },
        { title: "The Martian", genre: "Sci-Fi", author: " Andy Weir", link: "scifi4.html" },
        { title: "Foundation", genre: "Sci-Fi", author: "Isaac Asimov", link: "scifi5.html" },
        { title: "Hyperion", genre: "Sci-Fi", author: "Dan Simmons", link: "scifi6.html" },
        { title: "Snow Crash", genre: "Sci-Fi", author: "Neal Stephenson", link: "scifi7.html" },
        { title: "The Three-Body Problem", genre: "Sci-Fi", author: "Liu Cixin", link: "scifi8.html" },
        { title: "The Stars My Destination", genre: "Sci-Fi", author: "Alfred Bester", link: "scifi9.html" },
        { title: "Altered Carbon", genre: "Sci-Fi", author: "Richard K. Morgan", link: "scifi10.html" },






    ];

    // Filter books based on the query
    const results = books.filter(
        (book) =>
            book.title.toLowerCase().includes(query) ||
            book.genre.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
    );

    // Display results
    if (results.length > 0) {
        results.forEach((book) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("search-item");
            bookItem.innerHTML = `
                <a href="${book.link}">
                    <h3>${book.title}</h3>
                    <p><strong>Genre:</strong> ${book.genre}</p>
                    <p><strong>Author:</strong> ${book.author}</p>
                </a>
            `;
            searchResults.appendChild(bookItem);
        });
    } else {
        searchResults.innerHTML = "<p>No results found.</p>";
    }
});



