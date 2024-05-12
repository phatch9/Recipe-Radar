## Recipe_Radar 

A website that allows registered users to generate recipes for daily meals under customizable criteria such as dietary restrictions, allergies, max no. of calories, etc.


**Contributors:**
  - Timothy Kim
  - Phat Chau
  - Ryan Tang

**Stack**

- Frontend: Reactjs, CSS, HTML
- Backend: Google Firebase
- Database: Cloud Firestore

  
**Instructions for Building and Running the Website **

**Front end:**
- Download Node.js installer for proper operating system (https://nodejs.org/en/download/)
- Install Node.js and npm from the installer
- Clone the repository into system ("git clone https://github.com/phatch9/Recipe-Radar.git")
- Enter spoonapp directory from repository ("cd spoonapp")
- Install npm into spoonapp ("npm install")
- Install additional npm package for routing used in website ("npm install react-router-dom")
- Run the program ("npm start")

**Backend installation:**

- Install firebase into spoonapp directory("npm install firebase")
- Use pre-set backend service (owned by us) OR create your own accessible backend (https://firebase.google.com/docs/web/setup#create-project)
- Ensure our or your firestore's configuration matches in firebase/firebaseConfig.js

**Database Configuration**
- Create firestore database into firebase backend (https://cloud.google.com/firestore/docs/create-database-web-mobile-client-library)
- Install firestore into spoonapp directory ("npm install firestore")


### Project Structure

```
.
├── README.md
└── spoonapp
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── server
    │   ├── package-lock.json
    │   ├── package.json
    │   └── server.js
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── MealList.js
        ├── components
        ├── firebase
        ├── images
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js
```
