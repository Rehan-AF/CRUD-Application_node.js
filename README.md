# Node.js CRUD Application

This is a Node.js application that provides basic Create, Read, Update and Delete (CRUD) operations for a database.

## Prerequisites

- Node.js installed on your machine 
- A text editor or IDE of your choice 

## Installation 
1. Clone the repository: `git clone https://github.com/Rehan-AF/CRUD-Application_node.js.git` 
2. Install the dependencies: `npm install` 
3. Start the server: `npm start` 

 ## Usage 
1. Create a new record in the database by making a POST request to `http://localhost:3000/api/records` with the data you want to store in the body of the request as JSON  
2. Retrieve an existing record by making a GET request to `http://localhost:3000/api/records/<id>`, where <id> is the ID of the record you want to retrieve  
3. Update an existing record by making a PUT request to `http://localhost:3000/api/records/<id>`, where <id> is the ID of the record you want to update and including the updated data in the body of the request as JSON  
4. Delete an existing record by making a DELETE request to `http://localhost:3000/api/records/<id>`, where <id> is the ID of the record you want to delete  

 ## Contributing 
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.
