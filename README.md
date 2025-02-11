Here's your **aesthetic** README file with a **dark mode & light mode screenshot section**, detailed installation steps, Firebase hosting, and authentication setup.

````markdown
# 🚗 Car Rent Platform

A user-friendly car rental platform that allows users to **post their cars for rent** and **book vehicles for travel**. The system ensures secure booking, easy car management, and real-time updates.

🌐 **Live Site:** [Car Rent Platform](https://car-rent-67bee.web.app/)

---

## 📸 Screenshots

### 🌙 Dark Mode

![Dark Mode Screenshot](assets/dark-mode.png)

### ☀️ Light Mode

![Light Mode Screenshot](assets/light-mode.png)

_(Replace `assets/dark-mode.png` and `assets/light-mode.png` with actual screenshots)_

---

## 📑 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- [Hosting with Firebase](#hosting-with-firebase)
- [Authentication with Firebase](#authentication-with-firebase)
- [Dependencies](#dependencies)
- [License](#license)

---

## 🚀 Features

✅ **List Cars for Rent** - Users can add cars for rent, which automatically update on the UI.  
✅ **Manage My Cars & My Bookings** - Users can view and manage only their cars and bookings.  
✅ **Cancel Bookings** - Users can cancel their bookings anytime.  
✅ **Availability Check** - "Available Cars" page shows which cars are rentable, disabling booking for unavailable ones.  
✅ **Secure Booking** - Ensures a safe rental experience for users.  
✅ **Search & Sorting** - Find cars easily with filtering options.

---

## 🛠 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/car-rent-platform.git
   cd car-rent-platform
   ```
````

2. Install dependencies:
   ```sh
   npm install
   ```
3. Add environment variables (see below).
4. Start the development server:
   ```sh
   npm run dev
   ```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root folder and add:

```sh
VITE_apiKey=ENTER_YOUR_API_KEY_HERE
VITE_authDomain=ENTER_YOUR_AUTH_DOMAIN_HERE
VITE_projectId=ENTER_YOUR_PROJECT_ID_HERE
VITE_storageBucket=ENTER_YOUR_STORAGE_BUCKET_HERE
VITE_messagingSenderId=ENTER_YOUR_MESSAGING_SENDER_ID_HERE
VITE_appId=ENTER_YOUR_APP_ID_HERE
```

---

## 💻 Run Locally

1. Make sure you have **Node.js** installed.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project locally:
   ```sh
   npm run dev
   ```
4. Open the local server link in your browser.

---

## 🔥 Hosting with Firebase

1. Install Firebase CLI globally:
   ```sh
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```sh
   firebase login
   ```
3. Initialize Firebase in the project:
   ```sh
   firebase init
   ```
   - Select **Hosting** and **use an existing Firebase project**.
   - Set `dist` (or `build`) as the public directory.
   - Configure as a **single-page app (SPA)**.
4. Deploy the project:
   ```sh
   firebase deploy
   ```
5. Copy the hosting URL provided in the terminal.

---

## 🔐 Authentication with Firebase

1. Go to **Firebase Console** → Authentication.
2. Enable the desired sign-in methods (e.g., Google, Email/Password).
3. Use Firebase Authentication methods in your app:

   ```js
   import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

   const auth = getAuth();
   const provider = new GoogleAuthProvider();

   signInWithPopup(auth, provider)
     .then((result) => console.log("User signed in:", result.user))
     .catch((error) => console.error(error));
   ```

---

## 📦 Dependencies

### Main Dependencies

- `react`
- `react-router-dom`
- `firebase`
- `axios`
- `recharts`
- `sweetalert2`
- `swiper`
- `framer-motion`
- `react-hot-toast`

### Development Dependencies

- `vite`
- `eslint`
- `tailwindcss`
- `daisyui`

To install all dependencies:

```sh
npm install
```

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

🚀 Happy Coding! 🚀

```

```
