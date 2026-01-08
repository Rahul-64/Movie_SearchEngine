# 🎬 Movie Search Engine (React)

A modern **Movie Search & Favorites web application** built with **React**, using the **TMDB API**. The app allows users to browse popular movies, search in real time, and manage a favorites list with persistent storage.

This project was built as a learning-focused frontend application, emphasizing **React fundamentals, Context API, API handling, and responsive UI design**.

---



---

## 🧩 Features

* 🔍 **Browse Popular Movies** using TMDB API
* 🔎 **Real-time Search** by movie title
* ❤️ **Add / Remove Favorites**
* 💾 **Persistent Favorites** using `localStorage`
* 🧠 **Global State Management** with React Context API
* 📱 **Responsive Grid Layout** using CSS Grid
* 🖼️ **Consistent Movie Card Layout** with fixed aspect ratios
* ⚡ Fast and clean UI

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **State Management:** React Context API
* **Styling:** CSS3 (Flexbox + Grid)
* **API:** The Movie Database (TMDB)
* **Persistence:** Browser `localStorage`

---

## 📂 Project Structure

```
src/
│── components/
│   ├── MovieCard.jsx
│   └── Navbar.jsx
│
│── contexts/
│   └── MovieContext.jsx
│
│── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
│
│── css/
│   ├── MovieCard.css
│   ├── Favorites.css
│   └── App.css
│
│── App.jsx
│── main.jsx
```

---

## 🔐 Environment Variables

To keep the API key secure and avoid exposing it on GitHub, this project uses a `.env` file.

### 1️⃣ Create `.env` file in the project root

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

⚠️ Important:

* Variable **must start with `VITE_`**
* Do NOT wrap the value in quotes

---

### 2️⃣ Add `.env` to `.gitignore`

```gitignore
.env
```

---

### 3️⃣ Access API key in code

```js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

---

## 🧠 State Management (Context API)

The application uses **React Context API** to manage the global `favorites` state.

### Why Context API?

* Avoids prop drilling
* Centralized state for favorites
* Easy access across multiple components

### Provided values from context:

* `favorites` – array of favorite movies
* `addToFavorites(movie)`
* `removeFromFavorites(movieId)`
* `isFavorite(movieId)`

Favorites are automatically synced with `localStorage`.

---

## 🎨 UI & Layout

* **CSS Grid** is used to display movie cards
* Cards have fixed maximum widths to prevent oversized posters
* Images maintain a `2:3` aspect ratio
* Grid gracefully handles single or multiple movie results

---

## 🧪 Error Handling & Best Practices

* Defensive rendering (`useState([])` for arrays)
* Safe API handling (`data.results || []`)
* Optional chaining for missing movie data
* Loading states for async operations

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

---

## 📈 Learning Outcomes

This project helped reinforce:

* React Hooks (`useState`, `useEffect`, `useContext`)
* Context API patterns & pitfalls
* API lifecycle and async rendering
* CSS Grid behavior with dynamic content
* Real-world debugging techniques

---

## 🔮 Future Improvements

* ⭐ User authentication
* 🎭 Movie details page
* 🧪 Unit testing
* 🌙 Dark / light theme toggle
* ⚡ Performance optimizations

---

## 🙌 Acknowledgements

* [TMDB API](https://www.themoviedb.org/) for movie data
* React documentation

---

## 📬 Feedback

Feedback and suggestions are welcome! Feel free to open an issue or reach out.

---

### ⭐ If you like this project, consider giving it a star!
