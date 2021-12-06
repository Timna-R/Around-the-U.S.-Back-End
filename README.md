# Around the U.S. Back End  
  
## Directories  

The project is connected to the MongoDB database with Mongoose.

`/models` — Mongoose Schemas.  

`/controllers` — A collection of request handler functions responsible for interacting with a particular model.  

`/routes` — routing files.  
  
All other directories are optional and may be created by the developer if necessary.   
  
## Running the Project  
  
`npm run start` — to launch the server.  
  
`npm run dev` — to launch the server with the hot reload feature.  

## Examples

GET users list - http://localhost:3000/users

GET user by id - http://localhost:3000/users/61adfd772f61a35cbef311c0

POST create user - http://localhost:3000/users

PATCH update user profile - http://localhost:3000/users/me

PATCH update user avatar - http://localhost:3000/users/me/avatar

GET/POST cards list - http://localhost:3000/cards

DELETE card dy id - http://localhost:3000/cards/:cardId

PUT/DELETE like or dislike a card - http://localhost:3000/cards/:cardId/likes


**GitHub**

https://timna-r.github.io/around-express



