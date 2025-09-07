# Capstone Backend

This is the backend server for the Capstone project. It provides endpoints to handle job scheduling, uploads, and job status for a simulated cloud-based application. The server is built using **Node.js** and **TypeScript** with **Express**.

---

## **Table of Contents**

- [Features](#features)  
- [Folder Structure](#folder-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

---

## **Features**

- Health check endpoint (`/health`)  
- Dummy file upload endpoint (`/upload`)  
- Scheduler endpoint (`/launch`) to pick cloud regions based on priority:
  - `cheap` → lowest cost
  - `green` → lowest carbon footprint
  - `fast` → default fastest region (`us-east-1`)  
- Dummy job status endpoint (`/status/:jobId`)  
- Written entirely in **TypeScript**  
- Modular structure for scalability

---

## **Folder Structure**

Backend/
├─ src/
│ ├─ server.ts # Entry point
│ ├─ routes/ # API route definitions
│ │ ├─ health.ts
│ │ ├─ upload.ts
│ │ ├─ launch.ts
│ │ └─ status.ts
│ ├─ controllers/ # Route handlers / business logic
│ ├─ models/ # Data models and interfaces
│ ├─ utils/ # Helper functions (e.g., scheduler)
│ └─ types/ # TypeScript types
├─ package.json
├─ tsconfig.json
└─ README.md

yaml
Copy code

---

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/NamanMukesh/Captone.git
cd Captone
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npx ts-node src/server.ts
Server runs by default on http://localhost:8080.

Usage / API Endpoints
1. Health Check
bash
Copy code
GET /health
Response:

json
Copy code
{ "ok": true }
2. Upload File (Dummy)
bash
Copy code
POST /upload
Response:

json
Copy code
{ "path": "s3://bucket/fake-input.mp4" }
3. Launch Job / Scheduler
bash
Copy code
POST /launch
Body:

json
Copy code
{ "priority": "cheap" }   // options: "cheap", "green", "fast"
Response:

json
Copy code
{
  "jobId": "1694091234567",
  "region": "eu-north-1",
  "status": "running",
  "priority": "cheap"
}
4. Job Status (Dummy)
bash
Copy code
GET /status/:jobId
Response:

json
Copy code
{
  "jobId": "1694091234567",
  "status": "completed",
  "output": "s3://bucket/output.txt"
}
Future Improvements
Connect /upload to real AWS S3 storage

Connect /launch to actual EC2 instances

Add proper validation for API requests

Add logging and error handling

Add unit and integration tests

License
This project is licensed under the MIT License.

yaml
Copy code

---

I can also **make a shorter, GitHub-ready version with badges** for Node version, TypeScript, and build status so it looks very professional on your repo.  

Do you want me to do that?
