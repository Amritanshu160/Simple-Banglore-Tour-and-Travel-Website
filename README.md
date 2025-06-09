# Bengaluru Travels

**Bengaluru Travels** is an interactive web application showcasing top tourist destinations, restaurants, parks, clubs, and hills in Bangalore (Bengaluru), India. Users can also submit queries via a contact form, which is connected to Firebase and MongoDB Atlas for backend storage.

---

## 🌟 Features

- Detailed information on lakes, parks, restaurants, clubs, and hills in Bangalore
- Responsive UI with navigation and search functionality
- Contact form integrated with:
  - **Firebase Realtime Database**
  - **MongoDB Atlas** using Node.js and Express
- Client-side form validation and alert system

---

## 🛠️ Tech Stack

**Frontend:**

- HTML5  
- CSS3  
- JavaScript  

**Backend:**

- Node.js  
- Express.js  
- Body-parser  
- MongoDB Atlas  
- Firebase Realtime Database  

---

## 📁 Project Structure

```
Bengaluru-Travels/
├── index.html               # Main frontend page
├── webpagestyle.css         # Custom styling
├── webscript.js             # Firebase integration and frontend JS
├── app.js                   # Express.js server and MongoDB connection
├── launch.json              # VSCode launch configuration
├── loogo.png                # Site logo (used in UI)
└── README.md                # Project documentation
```

---

## 🚀 Setup Instructions

### 🔧 Prerequisites

- Node.js and npm
- MongoDB Atlas account (with cluster)
- Firebase account (Realtime Database)

### 💻 Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bengaluru-travels.git
cd bengaluru-travels
```

2. **Install dependencies**
```bash
npm install express mongoose body-parser
```

3. **Start the backend server**
```bash
node app.js
```
> The backend will run on `http://localhost:3000`

4. **Open frontend**
   - Open `index.html` directly in a browser
   - Or serve via a static server:
```bash
npx live-server
```

---

## 🔑 Firebase Setup

- Open `webscript.js`
- Replace the Firebase configuration object with your own from the Firebase Console.

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
```

---

## 📡 MongoDB Atlas Setup

- Open `app.js`
- Replace the MongoDB connection string with your own:

```javascript
const url = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/";
```

- Ensure your cluster has IP access and a database named `mydb`

---

## 📨 Contact Form Flow

- User fills the form in `index.html`
- Form data is:
  - Stored in **Firebase** using `webscript.js`
  - Also sent to `http://localhost:3000/submit-form` via `fetch()`
  - Saved to **MongoDB Atlas** in the `formdata` collection

---

## 💡 Additional Notes

- You can further improve the UI using modern CSS frameworks like Tailwind or Bootstrap
- Form validation can be enhanced with libraries like `yup` or `validator.js`
- Consider deploying:
  - Frontend on **GitHub Pages**, **Netlify**, or **Vercel**
  - Backend on **Render**, **Railway**, or **Heroku**

---

## 👤 Author

**Amritanshu Bhardwaj**  
Department of AI & Data Science  
BMS College of Engineering  

---

