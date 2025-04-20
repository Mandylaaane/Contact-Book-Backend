# Contact-Book-Backend

Backend Course: Individual Task

SUMMARY:

This is a Contact Book Application, where user can store personal contacts
by name, phone, email and address. Data can be searched, edited and deleted.
Containing custom built backend API and simple frontend.
(Not all frontend functionality is active yet.)

Built with;

- Backend: Express.js, MongoDB, Mongoose.
- Frontend: React, JavaScript.

HOW TO RUN:

- To run backend: npm run watch (http://localhost:3000/)
- To run frontend: npm run dev (http://localhost:5173/)
- MongoDb (local, not atlas): "mongodb://localhost:27017/contactBookDataBase"

To test search function in frontend,
search for name; Amanda, Jessie or George.

(Intended to not be displayed before search, plus frontend for save and display saved contact is missing. Will add in future.)

A11y & SEO:

Simple, straight forward front end with clear display and descriptions of what each input, button and titles are, semantic html including aria-labels.

According to lighthouse:
SEO

- Crawlable links.
- Links have descriptive text.
- Sussesful HTTP status code.
  A11Y
- Accessible names of buttons.
- Background/Foreground colors sufficient contrast ratio.
- Touch targets have sufficient size and spacing.

TRACKING:

Used Google Analytics to track user interactions.

SECURITY:

Mitigations:

- REQUEST PARSING MIDDLEWARE:
  Converts raw data into a usable JavaScript object, makes sure incoming requests are parsed safely and makes it easier to code.

- ERRORS & UNHANDLED ROUTES:
  Helps prevent app from crashing on unexpected errors and provides a consistent error response.

- LOGGING & AUDIT: (morgan)
  With no action logging or audit, threats/attacks may go undetected.

Not mitigated:

- UNSECURE MONGODB:
  Having no authenication to my database is a threat, can lead to datatheft or unauthorized modifications.

Enabling authentication would prevent this threat.
