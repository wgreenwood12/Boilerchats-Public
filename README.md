# Boilerchats
![Boilerchats Logo](https://github.com/wgreenwood12/Purdue-Boilerchats/blob/main/vue-project/ghost1.png)

Boilerchats is a web application designed to help Purdue University students easily find and join GroupMe group chats for their courses. With Boilerchats, students can connect, collaborate, and discuss coursework using the GroupMe chat platform.

## Features
- **Search Courses:** Search for any course offered at Purdue University.
- **Join GroupMe Chats:** Access GroupMe chat links associated with each course.
- **User Feedback:** Contact us for inquiries or report bugs through dedicated forms.
- **Submit GroupMe Links:** Students can submit GroupMe links for courses that are not already listed.

## Technologies Used
- **Frontend:** Vue.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Integration:** GroupMe API, Purdue Course Catalog
- **Infrastructure/Hosting:** Docker, Docker Compose, AWS (EC2, Route 53, VPC), Nginx, PM2

---

## Dockerized Setup

This project has been containerized using **Docker** and orchestrated using **Docker Compose** to streamline the setup and deployment process. With Docker, you can easily package and ship the entire application, along with its dependencies, across different environments.

## Prerequisites

Before setting up the application, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Setup Instructions

Follow the steps below to set up and run the Boilerchats application locally using Docker:

### 1. Clone the Repository

First, clone the project repository from GitHub:

```bash
git clone https://github.com/wgreenwood12/boilerchats.git
cd boilerchats
```
### 2. Configure Environment Variables

To securely manage sensitive information like database credentials, we use environment variables. You will need to create a .env file at the project root and fill in the required values. This .env file is used by Docker Compose to set environment variables in the containers.

Create a .env file in the root directory and add the following:
```bash
MYSQL_ROOT_PASSWORD=dummy-root-password
MYSQL_DATABASE=dummy-database
MYSQL_USER=dummy-user
MYSQL_PASSWORD=dummy-password
```
Additionally, create .env files for the backend and database in their respective directories, with placeholders for environment variables.

### 3. Build and Start Containers
Docker Compose will handle building and running the services (frontend, backend, and database) using the docker-compose.yml configuration file.

Run the following command to build the Docker containers and start the application:

```bash
docker-compose up --build
```
Builds images for the frontend, backend, and database services.
Sets up the necessary environment variables in the containers.
Starts the containers and orchestrates networking between them.

### 4. Access the Application
Once the containers are running, you can access the following services locally:

Frontend (Vue.js): Access the frontend at http://localhost:5173
Backend (Node.js/Express): Access the API at http://localhost:3000
MySQL Database: The MySQL service runs on port 3306 (used internally by the backend)

### 5. Stopping the Application
To stop the application and its containers, run:

```bash
docker-compose down
```
This will stop and remove the running containers.

### 6. TODO LIST:
- Purdue Courses API Integration: Replace scraping logic with the official Purdue Courses API for better reliability and up-to-date course information.
- Course Sections: Add dropdowns to each course to provide GroupMe links for specific sections (e.g., different professors or class times).


Screenshots
<div style="display: flex; justify-content: space-between;"> <img src="https://github.com/user-attachments/assets/c2829a96-b6f1-4b53-bb7d-f2990739660e" alt="Screenshot 1" height="350px"> <img src="https://github.com/user-attachments/assets/d9dc44db-836a-4cc1-b341-b60f5fafd863" alt="Screenshot 2" height="350px"> </div>

