# 📈 Weather & Todo 📈

## 👩🏽‍🚀 Start Up Guide

**Step 1: Clone Repo**

Using your OS's terminal cd into a directory you want to
clone the repo at. Copy the repo URL and run the following command
in the terminal

    git clone https://github.com/tapia81/TKH-Web-Developer-Assessment.git

**Step 2: Install Dependencies**

From your terminal, cd into repo and at the root run the following command for your server side:

    npm i

    //If server dependencies don't install properly, run the following to add need dependencies:
    npm i cors mongoose nodemon express dotenv gitignore

For your client side, cd into client and run the following:

    npm i

    //If client dependencies don't install properly, run the following to add need dependencies:
    npm i axios react-router-dom dotenv gitignore

**Step 3: Setup .env Files** (Must have a api key from openweathermap API)

In your repo, create a dotenv file named .env at the root and add the follwing:

    MONGO_URI=<your-Mongo-URI-Link>
    PORT=<Port-Number> //For local hosting must use set a PORT number

For your client side, cd into client create a dotenv file named .env and add the following:

    REACT_APP_WEATHER_API_KEY=<api-key>
    REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/forecast?
    REACT_APP_MONGO_URL=<localhost-url> or <external-hosted-url>

**Step 4: (If locally hosted) Run Server Side**

From your terminal (while inside of your root folder) run the following command:

    nodemon

or

    node server.js

**Step 5: Run React App**

From your terminal (while inside of your client folder) run the following command:

      npm start

## 🔨 Back-end Endpoints

Routes:

- view all tasks: "/"
- create task: "/"
- update task: "/:id"
- delete task: "/:id"

## 📦 List Dependencies

Front-End:

- React
- HTML
- CSS
- Axios
- Netlify

Backend:

- Node.js
- Express
- MongoDB
- Heroku

## 👨‍💻 Authors

- Anthony Tapia
