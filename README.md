# Backend_Development
Welcome to my fully functional Backend Development application! Here you will find a fully functional middle tier and backend. 

## Description
This project is meant to showcase my understanding of the middle tier and backend. It utilizes Express.js, Node.js, MongoDB, Mongoose and local authorization. With these tools, the application was built to:
- Register and login users
- Allow users to create projects that link to their user id
- Create tasks linked to projects via id
- Prevent usage of projects and tasks not linked to the user
- CRUD Operations for both projects and tasks

## Getting Started
### Dependencies
    "bcrypt": "^6.0.0",
    "dotenv": "^17.2.1",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.18.0", 

    "devDependencies": {
    "nodemon": "^3.1.10"
  }

### Installing
You can run npm i in order to install all necessary packages. 

### Executing program
Nodemon is set in the package.json file to allow you to run the program with npm run dev.

It is also important to set up a .env file and place it in your gitignore with these the variables:

MONGO_URI=<mongo db connection string>
JWT_SECRET=<your jwt secret> (you can generate one here: https://jwtsecrets.com/)
PORT=<3000 || 8080> or any other port you would like. This is not necesary.

The use of a route testing application like postman is also recommended. 

Be sure to save tokens that are generated in order to use them for the bookmark routes. 

## Authors
Vincent J. Quiles

## Reflection
Backend complete! I stated this in the last project(Secure Web Portal), but I'm very struck on how easy it is to follow the build up from the middle tier to now. And the fact that we don't have to worry about perfectly placing items in various places makes it that much easier. 

I also notice the planning process feels easier. I would say that's probably due to the fact that a lot of the logic was laid out and straight forward. The heardest aspect was linking the projects and tasks, and I struggled with that mostly because I wasn't quite sure how to get the id from the project since it was not in the payload. But some help from my colleagues, Maria, James, Karl, and Dennis, as well as some time in an office hours session with one of my instructors, Bryan, helped to clear the confusion. 

I'm pretty excited to now go and look at the link between the front end and backend. 

## Acknowledgments

My colleagues Maria, Karl, James, and Dennis, as well as Bryna helped me to better understand how to refer to the project id, and how to properly compare it to the user id in the request. 

I also heavily relied on my Secure Web Portal repo to get this done.

## Planning

Backend Development

Alright, just some initial thoughts on this project, I basically just have to do SBA 14 with an additional model. Also, for the routes connected between project and task, check out the office hour from 9/2 around 4:15 for a breakdown of how to approach it.


File Tree

config
-connection.js
controllers
-userController.js
-projectController.js
-taskController.js
models
-user.js
-project.js
-task.js
routes
-index.js
-api
--index.js
--userRoutes.js
--projectRoutes.js
--taskRoutes.js
middleware
-auth.js

server.js

Routes

index.js('/api', apiRoutes)

api
-index.js
('/users', userRoutes)
('/projects', projectRoutes)
('/tasks', taskRoutes)

-userRoutes.js
post('/register', userController.registerUser)
post('/login', userController.loginUser)

-projectRoutes.js
post('/create-project', projectController.createProject)
get('/user-projects', projectController.getAllProjects)
get('/user-projects/:id', projectController.getOneProject)
put('/update-project/:id', projectController.updateProject)
delete('delete-project/:id', projectController.deleteProject)
post('/:projectId/tasks', taskController.createTask)
get('/:projectId/tasks', taskController.getAllTasks)

-taskRoute.js
put('/:taskId', taskController.updateTask)
delete('/:taskId', taskcontroller.deleteTask)
