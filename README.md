# International Office App for THD

![THD campus](thd_campus.jpg)

# Team members

| Name              | Matriculation Number |
| ----------------- | -------------------- |
| Vikas Gunti       | 12100861             |
| Sabyasachi Mondal | 00821312             |



## Steps to Run the Project:

 1. Clone the project https://mygit.th-deg.de/vg04861/international-office-web-app  
 2. Install **[MongoDB](https://www.mongodb.com/try/download/community)** and **[Node.js](https://nodejs.org/en/download/)** version 

    Node: v14.18.0
 
 3. Install Angular CLI: `npm install -g @angular/cli` 

    Angular CLI: v12.2.13

 4. Install **[Postman](https://www.postman.com/downloads/)** 

 4. Navigate to `/international-office-web-app/backend` Run `npm install` to install the dependencies
 5. Navigate to `/international-office-web-app/thd-io-frontend` Run `npm install` to install the dependencies.


## To Run Application:

1. Execute `mongod` to start the MongoDB daemon
2. Navigate to `/international-office-web-app/backend` and Run `npm start` in the another console.
3. Go to Postman and populate the data for (News, Courses) API with the data present in the [PopulateData](https://mygit.th-deg.de/vg04861/international-office-web-app/-/blob/5fd44a41e0d050b5bb4b8e9341ab2dc8bf2d05a3/PopulateData) file .
4. Navigate to `/international-office-web-app/thd-io-frontend` and Run `ng serve` to start the application 
5. Follow the link `http://localhost:4200/`





## Git Repository

[Link to the MyGit Repository](https://mygit.th-deg.de/vg04861/international-office-web-app.git)

## Features
1. Material Design
2. User authentication
3. Route guards for external and logged in users
4. Chat between logged in users
5. Multilingual support
6. Rooms
7. News
8. Events
9. Interceptor for login caching
10. Navigation for finding courses building in google map

## Documentation folder

    - frontend documentation : /international-office-web-app/backend/apidoc
    - backend documentation : /international-office-web-app/thd-io-frontend/apidoc

## Task divisions (as per JIRA taskboard)

| Task            | Assignee |
| ----------------- | -------------------- |
| Backend setup, code structure and refactoring | Sabyasachi |
| Login service (Backend, frontend, database) | Sabyasachi |
| Authentication events and services | Sabyasachi |
| Interceptor service and backend integration | Sabyasachi |
| Authentication guard service | Sabyasachi |
| Navigation (google map) | Sabyasachi |
| Chat (websocket, backend , frontend) | Sabyasachi |
| Language component | Sabyasachi |
| Hero image, footer component | Sabyasachi |
| Header component, logo, Routing | Vikas Gunti |
| News (backend api, frontend, database) | Vikas Gunti |
| Rooms (backend api, frontend, database) | Vikas Gunti |
| Courses page and course edit dialog (backend api, frontend, database) | Vikas Gunti |
| Wiki page documentation | Vikas Gunti |
| Material Design| Vikas Gunti |
| THD Corporate Identity | Vikas Gunti |
| Frontend code refactoring and Interfaces | Vikas Gunti |
