🎓 Bonding Management System – Backend (Microservices)
📌 Overview

The Bonding Management System is a Dockerized, microservice-based backend built with NestJS to manage student bonding information in a scalable and secure way.

It is designed to handle:

Student authentication

Personal details

Parent/guardian information

Bank details

Loan amounts

Centralized access via an API Gateway

The system follows real-world backend architecture practices such as:

One database per microservice

API Gateway pattern

Environment-based configuration

Containerized deployment using Docker & Docker Compose

🧱 Architecture
Client
  |
  |  HTTP Requests
  v
API Gateway (Port 3000)
  |
  |-- Auth Service (3001) ── MySQL (auth_db)
  |-- Personal Service (3002) ── MySQL (personal_db)
  |-- Bank Service (3003) ── MySQL (bank_db)
  |-- Parent Service (3004) ── MySQL (parent_db)
  |-- Loan Service (3005) ── MySQL (loan_db)

Key Design Decisions

Microservices instead of monolith

Database per service (no shared DBs)

Docker networking (services communicate via DNS names)

API Gateway as a single entry point

JWT-based authentication (in progress / extensible)

🛠️ Tech Stack
Category	Technology
Backend Framework	NestJS (TypeScript)
ORM	TypeORM
Databases	MySQL (per service)
Authentication	JWT (Passport)
Containerization	Docker
Orchestration	Docker Compose
Architecture	Microservices + API Gateway
📂 Project Structure
bonding/
├── apps/
│   ├── api-gateway/
│   ├── auth-service/
│   ├── personal-service/
│   ├── bank-service/
│   ├── parent-service/
│   └── loan-service/
├── docker-compose.yml
├── package.json
└── README.md


Each service is:

Independently deployable

Owns its own database

Exposed through the API Gateway

🚀 Running the Backend (Local Setup)
🔧 Prerequisites

Make sure you have:

Docker

Docker Compose

Node.js (v18+) (only if running services outside Docker)

▶️ Step 1: Clone the Repository
git clone https://github.com/lusungu-skillset/bonding-backend.git
cd bonding-backend

▶️ Step 2: Start All Services
docker compose up -d --build


This will start:

5 MySQL databases

5 backend microservices

1 API Gateway

▶️ Step 3: Verify Running Containers
docker ps


You should see 11 running containers.

🔗 API Gateway Endpoints

All requests go through port 3000.

🔐 Authentication
POST /auth/register
POST /auth/login

👤 Personal Details
POST /personal
GET  /personal

🏦 Bank Details
POST /bank
GET  /bank

👪 Parent Details
POST /parent
GET  /parent

💰 Loan Information
POST /loan
GET  /loan

🧪 Example: Register a User
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "RegNumber": "BSC-COM-08-21",
    "firstname": "Luke",
    "surname": "Mhango",
    "email": "luke@test.com",
    "password": "secret123"
  }'

🔐 Authentication (JWT)

Login uses email + password

JWT is issued on successful login

Gateway can be extended to:

Protect routes

Enforce role-based access

Rate-limit requests

📈 Why This Project Matters

This backend demonstrates:

Production-ready backend architecture

Clean separation of concerns

DevOps skills (Docker, Compose, networking)

Scalable system design

Security-aware development

It is suitable for:

University systems

Government student loan platforms

Enterprise backend roles

Cloud & DevOps environments

👨‍💻 Author

Lusungu Mhango
Computer Science | Backend & DevOps
📍 Malawi

Backend Engineering (NestJS, TypeORM)

Microservices Architecture

Docker & DevOps Fundamentals

📌 Future Improvements

Centralized authentication guard in API Gateway

Role-Based Access Control (RBAC)

Kubernetes deployment (EKS)

CI/CD with Jenkins or GitHub Actions

API documentation with Swagger
