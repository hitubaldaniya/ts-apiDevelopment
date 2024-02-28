## TypeScript API Development
- Just to demonstrate API Development with TypeScript and MongoDB(NoSQL Database).

### Installation and Setup Instructions:
1. Clone the repository or download the zip file. (https://github.com/hitubaldaniya/ts-apiDevelopment.git)
2. Open project  folder in your preferred IDE like VS Code.
3. Make sure you have NodeJS installed on your system. If not, please install it.
4. Now open terminal / command prompt in your IDE and navigate to the root directory of the cloned project.
5. Run `npm install` to install all dependencies for this project.
6. Once installation is complete, run `npm start` to start the application. You should see "Server started" message in the console.
7. Setup proper mongo connection url at './lib/database/main.ts' line no 3;
8. You can use "https://www.mongodb.com/cloud/atlas/register"  to create a cluster in MongoDB Atlas and get the url.
9. The server is running on port :8080.

### Available API's
- http://localhost:8080/auth/register (Request Type: POST)
```bash
{
    "email":"hitu.baldaniya@gmail.com",
    "password":"12345",
    "username":"Hitesh"
}
```
- http://localhost:8080/auth/login (Request Type: POST)
```bash
{
    "email": "hitu.baldaniya@gmail.com",
    "password": "12345"
}
``` 
- http://localhost:8080/users (Request Type: GET)
```bash
{
    "email": "hitu.baldaniya@gmail.com",
    "password": "12345"
}
``` 
- http://localhost:8080/users/{userID} (Request Type: DELETE)
- http://localhost:8080/users/{userID} (Request Type: PATCH)
```bash
{
    "username": "ModifiedHitesh"
}
```
