# Dreflix: Movie explorer

Website dedicated to exploring the world of cinema, where you will discover information about a wide variety of films. Here you can access details such as the synopsis, the trailer, the main cast among other details. Next.JS 14 is used as the main framework, the TMDB API is consumed and a design was created that is a mix of the design of different video streaming platforms such as Amazon Prime and Crunchyroll.

## Preview

![ezgif com-animated-gif-maker](https://github.com/dresandev/dreflix/assets/79766563/06c74f3b-8034-4699-859c-83cd8deaa463)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.
Personally I use the .env.local file to work locally with the environment variables and avoid uploading the variables with their values ​​to the repository

`API_BASE_URL`

`ACCESS_TOKEN_AUTH`

here you can get the values ​​for the environment variables: https://developer.themoviedb.org/reference/intro/authentication

## Run development server

After setting environment variables, you can start the development server by running the following commands

```bash
  cd dreflix
  # or the name you gave the project when cloning the repository
  yarn dev
  # or
  pnpm dev
  # or
  npm dev
```
