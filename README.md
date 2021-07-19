# Glintr project
This is a solo project to help myself use technologies I have learned so far. (react, redux, bcrypt, express, sequelize)

## Using this repository

1. Clone this repository
2. Cd into frontend and backend folder and run `npm install` to install all dependencies
3. Create .env file based on .env.example file in backend folder
    * `openssl rand -base64 -10` creates a strong password if you have openssl installed in your shell
4. Create a database user with the same name and password in the .env file that you have created with CREATEDB privileges.
5. Run sequelize commands to set database.
    * `npx dotenv sequelize db:create`
    * `npx dotenv sequelize db:migrate`
    * `npx dotenv sequelize db:seed:all`
6. Cd into backend folder and run `npm start`
7. Cd into frontend folder and run `npm start`

### website should look something like this
[[https://github.com/TastySatang/AuthMe/blob/main/frontend/public/example.png]]
