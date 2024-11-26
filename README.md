# :plate_with_cutlery: Recipe CRUD API
A simple Node.js project to learn and practice building a RESTful API using Node.js, Express, MongoDB, and Mongoose. This project implements basic CRUD (Create, Read, Update, Delete) operations for managing recipes.

## :sparkles: Features
**- Create** a new recipe

**- Read** recipes (all or a single one)

**- Update** an existing recipe

**- Delete** a recipe

This project is designed for beginners to understand the fundamentals of backend development with a focus on Node.js and MongoDB.

## :hammer_and_wrench: Tech Stack
**- Node.js**: JavaScript runtime for building the API.

**- Express**: Framework for creating RESTful routes.

**- MongoDB**: NoSQL database for storing recipes.

**- Mongoose**: ODM (Object Data Modeling) library for MongoDB.

**- Nodemon**: Tool to automatically restart the server during development.

**- Postman**: Tool for testing APIs by sending requests and analyzing reponses.

## :white_check_mark: Prerequisites
Before running this project, ensure you have the following installed:

**- Node.js** (v14+ recommended)

**- MongoDB** (local or Atlas for cloud)

## :package: Installation
**1.** Clone this repository

**2.** Install dependencies

**3.** Set up environment variables in a .env file and add:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/recipesDB
```

**4.** Start MongoDB:

If running locally, ensure MongoDB is started (mongod command).

Or connect to your MongoDB Atlas cluster using the MONGO_URI.

**5.** Start the development server:
```
npm run dev
```

## :test_tube: Testing
### 1. :new: **Create a recipe**

- **Method**: POST
- **URL**: `http://localhost3000/api/recipes`
- **Body (raw JSON)**:
```
{
  "name": "Spaghetti Bolognese",
  "description": "A classic Italian pasta dish.",
  "servings": 4
}
```
Proceed to add many recipes so you can see the difference between get all recipes and get single recipe
- **Expected response**:
```
{
  "_id": <someId>,
  "name": "Spaghetti Bolognese",
  "description": "A classic Italian pasta dish.",
  "servings": 4,
  "createdAt": <createdAt>,
  "updatedAt": <updatedAt>,
}
```

### 2. :scroll: **Get all recipes**

- **Method**: GET
- **URL**: `http://localhost3000/api/recipes`
- **Expected response**:
```
[
  {
    "_id": "<someId>",
    "name": "Spaghetti Bolognese",
    "description": "A classic Italian pasta dish.",
    "servings": 4,
    "createdAt": <createdAt>,
    "updatedAt": <updatedAt>,
  }
]
```

### 3. :mag: **Get recipe by id**

- **Method**: GET
- **URL**: `http://localhost3000/api/recipes/:id`
- **Expected response (let's say we want to find the Spaghetti Bolognese)**:
```
{
    "_id": "<someId>",
    "name": "Spaghetti Bolognese",
    "description": "A classic Italian pasta dish.",
    "servings": 4,
    "createdAt": <createdAt>,
    "updatedAt": <updatedAt>,
}
```

### 4. :recycle: **Update a recipe**

- **Method**: PUT
- **URL**: `http://localhost3000/api/recipes/:id`,
- **Body (raw JSON)**:
```
{
  "name": "Updated Recipe Name",
  "description": "Updated description.",
  "servings": 6
}
```
- **Expected response (let's say we want to update the Spaghetti Bolognese)**:
```
[
  {
    "_id": "<someId>",
    "name": "Update Recipe Name",
    "description": "Updated description.",
    "servings": 6,
    "createdAt": <createdAt>,
    "updatedAt": <updatedAt>,
  }
]
```

### 5. :x: **Delete a recipe**

- **Method**: DELETE
- **URL**: `http://localhost3000/api/recipes/:id`,
- **Expected response (let's say we want to delete the Spaghetti Bolognese)**:
```
{
  "message": "Recipe deleted successfully."
}
```

## :crystal_ball: Future Improvements
- Add user authentication for recipe management.

- Add image upload for recipes.

- Implement pagination for listing recipes.