# Contact-Book-Backend

Backend Course: Individual Task

SUMMARY:

This is a Contact Book Application.
Containing a backend database

HOW TO RUN:

Terminal commands:

A11y & SEO:

TRACKING:

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
