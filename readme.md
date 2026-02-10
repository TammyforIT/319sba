This API uses Express for all routing and Mongoose to handle the MongoDB connection and data models.  
The project includes three main models — **Cats**, **Owners**, and **Vets** — each with full CRUD functionality.  
The Cat model also references both Owners and Vets, allowing the data to stay connected and consistent.

The **cats** route includes additional features such as:
- Pagination  
- Filtering (for example, by breed)  
- Sorting  

These options make it easier to control how many results you get and how they’re organized.

All routes are wrapped in try/catch blocks so errors don’t break the server, and everything is passed through a global error‑handling middleware.  
There is also a logger middleware that prints each request with a timestamp, making it easy to track activity during development.  
 the project includes two types of middleware: a request logger and a global error handler.**

The `conn.js` file manages the MongoDB connection using the `.env` configuration.  
The `seed.js` file populates db.

Overall, the project includes:
- Full CRUD routes for Cats, Owners, and Vets  
- Mongoose schemas with validation  
- Model relationships using ObjectId references  
- Logger middleware  
- Global error handler  
- Seed file for sample data  
- Clean and organized folder structure  
- A working MongoDB connection setup  


