# 🥄 Urban Spoon - Backend API

Ye **Urban Spoon** reservation system ka core engine hai. Ye Node.js aur Express.js par bana ek RESTful API hai jo MongoDB ke saath integrate hokar reservations ko manage karta hai.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Atlas)
* **ODM:** Mongoose
* **Security:** CORS & Dotenv

---

## ⚙️ Setup & Installation

### 1. Repository Clone Karein
```bash
git clone 
cd filename
```
### 2. Dependencies Install Karein
```
npm install
```
### 3. Environment variables (.env)
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Server Start Karein
```
# Development mode
npm run dev

# Production mode
npm start
```

## 🛣️ API Endpoints

### 📝 Inquiry Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/inquiry` | Nayi reservation create karne ke liye |
| **GET** | `/api/inquiry` | Saari reservations fetch karne ke liye (Admin) |
| **DELETE** | `/api/inquiry/:id` | Specific reservation delete karne ke liye |

## 📊 Database Schema (Inquiry Model)
```
{
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  guests: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
}
```