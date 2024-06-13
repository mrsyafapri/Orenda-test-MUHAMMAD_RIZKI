# How to Setup

1. Open the `api` folder.
2. Install Dependencies

   Run the following command to install all the necessary dependencies.

```bash
npm install
```

3. Setup MySQL Database

a. Start MySQL Server
Make sure your MySQL server is running. You can start it from the command line or using a MySQL management tool like MySQL Workbench.

b. Access MySQL Command Line
Open the MySQL command line interface or use a MySQL client (like MySQL Workbench) to connect to your MySQL server.

```bash
mysql -u root -p
```

You will be prompted to enter your MySQL root password.

c. Create Database
Run the following SQL commands to create a new database for your API:

```sql
CREATE DATABASE orenda_test;
```

4. Configure Environment Variables

Create a `.env` file in the `api` directory and add the following configuration, adjusting the values as necessary for your setup.

```makefile
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=orenda_test
PORT=3000
```

5. Start the Server

Run the following command to start the web server.

```bash
npm run start
```

The server should now be running on the port specified in the .env file (default is 3000). You can access the API documentation at http://localhost:3000/api-docs.

## Additional Information

- Ensure your MySQL server is running and accessible with the credentials provided in the `.env` file.
- If you encounter any issues, make sure your Node.js and npm versions are up to date.

## Example `.env` File

Here is an example of what your `.env` file should look like:

```makefile
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=orenda_test
PORT=3000
```

Replace `yourpassword` with your actual MySQL root password. If you do not have a password set for your MySQL root user, you can leave it blank.

## Running in Development Mode

To run the server in development mode with live reloading using `nodemon`, use the following command:

```bash
npm run dev
```

This will automatically restart the server whenever you make changes to the code.
