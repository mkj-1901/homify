# 🏠 Homify

[Live Demo 🚀](https://smart-homify.netlify.app/)

Smart Homify is an intuitive smart home automation dashboard that lets users control and monitor their IoT-enabled home devices in real-time. From smart lights to fans and air conditioning, this dashboard provides a seamless way to manage your home with ease — all in one place.

---

## ✨ Features

- 💡 **Control Devices**: Remotely manage smart lights, fans, and AC.
- 📡 **Real-time Status**: Live updates powered by Firebase Realtime Database.
- 🎤 **Voice Commands**: Voice integration (coming soon).
- 📱 **Responsive Design**: Beautiful, mobile-friendly interface built with React & Tailwind.
- 🔒 **Secure Access**: Supports Anonymous Authentication for secure database reads/writes.

---

## 📸 Demo

<p align="center">
  <img src="https://github.com/user-attachments/assets/65ccd121-aaff-43e6-9ff6-7afa4c26723e" width="200"/>
  <img src="https://github.com/user-attachments/assets/61cb8709-f44e-474d-966f-1c9cba746de2" width="200"/>
  <img src="https://github.com/user-attachments/assets/4816aa97-3168-4b4a-8aad-8d461a14c101" width="200"/>
</p>

---

## 🛠 Tech Stack Used

- **Frontend:** React.js, HTML, Tailwind CSS, JavaScript
- **Backend/Database:** Firebase Realtime Database, Firebase Authentication
- **Others:** Vite (Bundler), Raspberry Pi for IoT (Hardware)

---

## 👥 Team Members

- [Mayank Kumar Jha](https://github.com/mkj-1901)
- [Krish Dhaked](https://github.com/kd5778)
- [Himanshu Vitthalani](https://github.com/Himanshu-1903)
- [Archee Jaiswal](https://github.com/archee_j)

---

## 🔒 Firebase Security & Setup (Important)

To ensure secure access and prevent "Permission Denied" errors, you must configure Firebase correctly:

### 1. Enable Anonymous Authentication
Because the database rules require authentication, you must enable Anonymous Sign-in:
1. Go to your [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Build > Authentication**.
3. Click on the **Sign-in method** tab.
4. Click **Add new provider** and select **Anonymous**.
5. Enable it and click **Save**.

### 2. Update Realtime Database Security Rules
Your Realtime Database should only allow read/write access to authenticated users:
1. Navigate to **Build > Realtime Database** in the Firebase Console.
2. Go to the **Rules** tab.
3. Replace the existing (or expired) rules with:
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```
4. Click **Publish**.

---

## 📖 Firebase Fetching Methods Explained

In this project, data is fetched and synced using the modern Firebase Modular SDK (v9+). 

### `onValue` vs `get`
- **`onValue`**: Sets up an active listener. Every time the data changes in the database, the callback function is triggered automatically, keeping the UI in perfect sync with the backend. *This is ideal for a real-time IoT dashboard where device statuses update frequently.*
- **`get`**: Fetches the data exactly once. It does not listen for future changes. *This is better for one-off reads, like fetching a user profile on load, to save bandwidth.*

---

## 👨‍💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mkj-1901/smart-homify.git
   cd smart-homify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm run dev
   ```

---

## 📌 Future Improvements

- Fully functional user authentication (Email/Password & Google Auth)
- Enhance voice command capabilities
- Analytics dashboard for energy usage
- Integrate more IoT device types

