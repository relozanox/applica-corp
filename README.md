
# Project Setup and Installation Guide

## Prerequisites

Ensure that the system has the following installed:

- **Node.js**: The LTS version of Node.js must be installed. You can download it [here](https://nodejs.org/en/download/).
- **npm**: Comes with the Node.js installation and is required to manage dependencies.

## Installation Instructions

### Step 1: Clone the repository or download the project
Clone it using the following command:

```bash
git clone https://github.com/relozanox/applica-corp.git
```

If you prefer, simply download the project and unzip it on your system.

### Step 2: Navigate to the project directory
Go to the project folder:

```bash
cd applica-corp
```

### Step 3: Install dependencies
All necessary dependencies are listed in the `package.json` file. To install them, run:

```bash
npm install
```

This command will install all the dependencies listed in the `package.json` file, including `express` and `dotenv`.

## Environment Variables

This project works with environment variables, create a `.env` file at the root of the project with the necessary values. Use `.env.example` file as a reference:

```
API_URL=https://jsonplaceholder.typicode.com
PORT=3000
```
## Running the Project

### Step 1: Start the server
Once the dependencies are installed, you can start the server with the following command:

```bash
npm start
```

This will start the server on the configured port (default is `3000`). If you want to change the port, you can modify the value in the `.env` file or directly in the code.

### Step 2: Access the API
Now you can access the API through your browser or tools like Postman. Test the route with pagination parameters:

```
http://localhost:3000/posts?start=0&size=10
```

This will return the first 10 blog posts along with the author and comments information.


## Project Dependencies
The `package.json` file should look like this:

```json
{
  "name": "applica-corp",
  "version": "1.0.0",
  "description": "Simple RESTful API that returns a detailed list of blog posts",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/app.js"
  },
  "keywords": [],
  "author": "Raúl Lozano",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.0"
  }
}

```

## Testing and Verification

Once the server is running, you can test the following routes:

- `GET /posts?start=0&size=5`: Should return the first 5 posts, along with their author and comments.
- `GET /posts?start=10&size=5`: Should return posts 11 to 15.

## Error Handling
The API will return the following status codes:
- **200**: If the data is successfully retrieved.
- **404**: If no posts are found for the given pagination parameters.
- **500**: If there is a server error.
