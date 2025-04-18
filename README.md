# Contact-Book-Backend

Backend Course: Individual Task

SUMMARY:

This is a Contact Book Application.
Store your personal contacts by name, phone, email and address.
Can be searched, edited and deleted.
Containing custom built backend API and simple frontend.

HOW TO RUN:

Terminal commands: (need to be added)

A11y & SEO:

Handle Keyboard Events, aria-labels (need to be created)

TRACKING:

Used Google Analytics, (write more here)

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
