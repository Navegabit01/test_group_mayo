
# Library Management API

This project is an API for managing library operations including user authentication, book availability, loans, and reservations. The API is built with Node.js, Express, and follows Clean Architecture principles.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Book Management**: CRUD operations for books.
- **Loan Management**: Loaning and returning books.
- **Reservation System**: Reserving books and notifying users when available.
- **User Loan History**: Viewing user loan history.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: ODM for MongoDB.
- **TypeScript**: Typed JavaScript for better development experience.
- **JWT**: JSON Web Tokens for secure authentication.
- **Docker**: Containerization of the application.
- **GitHub Actions**: CI/CD pipeline.
- **Jest**: Testing framework.

## Architecture

The project follows Clean Architecture principles:
- **Entities**: Core business logic.
- **Use Cases**: Application-specific business rules.
- **Interface Adapters**: Controllers, Repositories.
- **Frameworks & Drivers**: Express, Mongoose, JWT.

## Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/library-management-api.git
   cd library-management-api
