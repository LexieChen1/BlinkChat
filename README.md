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

## Project Structure

BlinkChat/
├── backend/ # Express backend
│ └── src/ # Backend source code
│ └── .env # Backend environment config
├── frontend/ # React frontend
│ └── src/ # Frontend components/pages/store
├── .node-version # Ensures Node 18 on platforms like Render
├── package.json # Root metadata
└── README.md


## Getting Started (Local Development)

### Setup .env file

MONGODB_URI=...
PORT=5001
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
NODE_ENV=development

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```


License
MIT © 
