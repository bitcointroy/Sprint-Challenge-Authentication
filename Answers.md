<!-- Answers to the Short Answer Essay Questions go here -->

## Authentication Sprint Challenge

### Troy Bradley - CS6

1. a. Middleware: functions that help pass information between the client and server, while also doing some processing of that information before it is presented at it's destination. It also helps to maintain the correct order of processing steps by telling the program where to go "next", once it has resolved a Promise.
   b. Sessions: Sessions in express.js allow programmers to set attributes on a specific user of an app, and limit or expand their access to resources based on those attributes. isLoggedIn may allow access to their profile within the app, for example.
   c. bcrypt: is a module that works with node.js to provide hash and compare functions that allow programmers to safely store and use passwords to authenticate users.  
   d. JWT (jots): JSON Web Tokens are an alternative to sessions used to provide the same functionality.
1. bcrypt vs. attackers: bcrypt includes a concept called "SaltRounds", which interjects a delay in the process of hashing a password. This delay effectively thwarts dictionary attacks (using known words to "guess" a password) by making the process take too long. There are millions of possible entries in a "dictionary" used in such an attack, so every millisecond that it takes to hash a password guess and return a response from the server means thousands of seconds to complete a dictionary attack. There are "only" 86,400 seconds in 24 hours.
1. A JSON Web Token includes a header, payload, and signature.
