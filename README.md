# 🚗 Car Rent Platform

A user-friendly car rental platform that allows users to **post their cars for rent** and **book vehicles for travel**. The system ensures secure booking, easy car management, and real-time updates.

🌐 **Live Site:** [Car Rent Platform](https://car-rent-67bee.web.app/)

---

## 📸 Screenshots

### 🌙 Dark Mode

#### 🏠 Home Page

![Home Page - Dark Mode](https://i.ibb.co.com/twBLbFFw/Screenshot-2025-02-11-141645.png)

#### 🚗 Available Cars Page

![Available Cars Page - Dark Mode](https://i.ibb.co.com/35Zn8WnT/Screenshot-2025-02-11-141655.png)

#### ➕ Add Car Page

![Add Car Page - Dark Mode](https://i.ibb.co.com/b5xPytmd/Screenshot-2025-02-11-141711.png)

### ☀️ Light Mode

#### 🏠 Home Page

![Home Page - Dark Mode](https://i.ibb.co.com/hk4R6kK/Screenshot-2025-02-11-141549.png)

#### 🚗 Available Cars Page

![Available Cars Page - Dark Mode](https://i.ibb.co.com/1GnfFfLJ/Screenshot-2025-02-11-141610.png)

#### ➕ Add Car Page

![Add Car Page - Dark Mode](https://i.ibb.co.com/4w85hbNQ/Screenshot-2025-02-11-141632.png)

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
   git clone https://github.com/ashraful2871/Car-rental-client.git
   cd car-rent-platform
   ```

## 🔑 Environment Variables

Create a `.env.local` file in the root folder and add:

```sh
VITE_apiKey=ENTER_YOUR_API_KEY_HERE
VITE_authDomain=ENTER_YOUR_AUTH_DOMAIN_HERE
VITE_projectId=ENTER_YOUR_PROJECT_ID_HERE
VITE_storageBucket=ENTER_YOUR_STORAGE_BUCKET_HERE
VITE_messagingSenderId=ENTER_YOUR_MESSAGING_SENDER_ID_HERE
VITE_appId=ENTER_YOUR_APP_ID_HERE
VITE_API_URL=HERE_IS_YOUR_BACKEND_API_URL
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

For Server Setup:
🌐 **Server Repository:** [Car Rent Platform server](https://github.com/ashraful2871/Car-Rental-Server)

🚀 Happy Coding! 🚀
