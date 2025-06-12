## BlinkChat

This is a full-stack, real-time chat application that enables users to securely connect, share messages, and exchange images in a responsive, modern UI. Built with React, Node.js, Express, MongoDB, and Socket.io, it offers a seamless messaging experience with real-time updates and robust authentication.

## Features

- User Authentication with JWT + Cookies
- Auto-translation and multi-language support  
- Friend list and one-on-one chat  
- Image sharing with Cloudinary  
- Real-time messaging with Socket.io  
- Online user indicator  
- Responsive UI with Tailwind CSS  

## Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS
- Zustand (state management)
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Socket.io
- Cloudinary (for image uploads)
- cookie-parser, cors, dotenv

## 📁 Project Structure

BlinkChat/
├── backend/ # Express backend
│ └── src/ # Backend source code
│ └── .env # Backend environment config
├── frontend/ # React frontend
│ └── src/ # Frontend components/pages/store
├── .node-version # Ensures Node 18 on platforms like Render
├── package.json # Root metadata
└── README.md


## ⚙️ Getting Started (Local Development)

1. Clone the repository
2. Set up the backend
bash
Copy
Edit
cd backend
npm install
cp .env.example .env  # or create .env manually
npm start
3. Set up the frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev

📦 Backend Environment Variables
Create a .env file in /backend with the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

License
MIT © 
