# MERN: Book Search Engine

[Heroku Link]()

![screenshot1]()
![screenshot2]()
![screenshot3]()
![screenshot4]()

## Description

most modern websites are driven by two things: data and user demands. the ability to personalize user data is the cornerstone
of real-world web development today. And as user demands evolve, applications need to be more performant.
I used a starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be
a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and
Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

I applied an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API,
andModify the existing authentication middleware so that it works in the context of a GraphQL API.Create an Apollo Provider so
that requests can communicate with an Apollo Server.

and Deployed the application to Heroku with a MongoDB database using MongoDB Atlas.

## Uses

an avid reader can search for new books to read,sO that the user can keep a list of books to purchase

## Acceptance Criteria

a book search engine
when the user load the search engine
then the user presented with a menu with the options Search for Books and Login/Signup and an input field to search for books
and a submit button
when the user click on the Search for Books menu option
then the user presented with an input field to search for books and a submit button
when the user not logged in and enter a search term in the input field and click the submit button
then the user presented with several search results, each featuring a book’s title, author, description, image, and a link to
that book on the Google Books site
when the user click on the Login/Signup menu option
then a modal appears on the screen with a toggle between the option to log in or sign up
when the toggle is set to Signup
then the user presented with three inputs for a username, an email address, and a password, and a signup button
when the toggle is set to Login
then the user presented with two inputs for an email address and a password and login button
when the user enter a valid email address and create a password and click on the signup button
then the user account is created and I am logged in to the site
when the user enter an account’s email address and password and click on the login button
then the modal closes and the user logged in to the site
when the user logged in to the site
then the menu options change to Search for Books, an option to see the saved books, and Logout
when the user logged in and enter a search term in the input field and click the submit button
then the user presented with several search results, each featuring a book’s title, author, description, image, and a link
to that book on the Google Books site and a button to save a book to the user account
when the user click on the Save button on a book
then that book’s information is saved to the user account
when the user click on the option to see the saved books
then the user presented with all of the books the user have saved to the account, each featuring the book’s title, author,
description, image, and a link to that book on the Google Books site and a button to remove a book from the user account
when the user click on the Remove button on a book
then that book is deleted from the user saved books list
when the user click on the Logout button
then the user logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input
field to search for books and a submit button
