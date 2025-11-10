# 🎬 Movie App

A simple and interactive **React Movie Application** that displays a list of movies with their descriptions, ratings, posters, and trailer links.  
Users can browse movies, filter them by title or rating, and view detailed pages with descriptions and trailers.

---

## 🚀 Features

- 🧩 **Movie List Page** – Displays all available movies with their posters, titles, and ratings.  
- 🔍 **Filtering** – Search movies by title or filter by rating.  
- 🎞️ **Movie Description Page** – Click on a movie card to view details (description + embedded trailer).  
- ↩️ **Navigation** – Easily navigate back to the home page using React Router.  
- ➕ **Add Movie Feature** – Add new movies to the list dynamically (optional extension).

---

## 🛠️ Technologies Used

- **React JS** – Frontend library for building UI.  
- **React Router DOM** – For page navigation and routing.  
- **JavaScript (ES6+)** – Logic and interactivity.  
- **CSS / Bootstrap / Tailwind (optional)** – Styling and layout.  

---

## 📁 Folder Structure

movie-app/
│
├── src/
│ ├── components/
│ │ ├── MovieList.js
│ │ ├── MovieCard.js
│ │ ├── MovieDescription.js
│ │ └── Filter.js
│ ├── App.js
│ ├── index.js
│ └── movies.js
│
├── package.json
├── README.md
└── .gitignore

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1. Clone this repository
```bash
git clone https://github.com/YourUsername/Movie-App.git
2. Navigate into the project folder
bash
Copy code
cd movie-app
3. Install dependencies
bash
Copy code
npm install
4. Start the development server
bash
Copy code
npm start
Then open your browser and visit 👉 http://localhost:3000

🎥 Example Movies
Movie	Description	Rating
Inception	A mind-bending thriller by Christopher Nolan.	⭐⭐⭐⭐⭐
Interstellar	Exploration through space and time.	⭐⭐⭐⭐
Black Panther	Celebrates African culture and leadership.	⭐⭐⭐⭐⭐
Mission: Impossible – The Final Reckoning	A story of morality and technology.	⭐⭐⭐⭐⭐

🧭 Routes
Route	Description
/	Home page – shows all movies
/movie/:id	Individual movie details and trailer

💡 Future Improvements
Add user ratings and reviews

Integrate an external movie API (like OMDb)

Add authentication for user accounts

👨‍💻 Author
Brian Okech Wade
📍 Nairobi, Kenya
