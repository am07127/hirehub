# **HireHub** 

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/next.js-11.1.2-blue.svg)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-14.x-brightgreen.svg)](https://nodejs.org/)
[![Contributors Welcome](https://img.shields.io/badge/contributors-welcome-brightgreen.svg)](CONTRIBUTING.md)

**HireHub** is an AI-driven recruitment platform designed to streamline the hiring process by providing advanced candidate screening, automated interview scheduling, and predictive analytics to help businesses find the perfect fit.

## **Table of Contents**
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

---

## **Features**
- **AI-Powered Resume Parsing**: Automatically extract key information from resumes.
- **Job-Candidate Matching**: Leverage AI to match candidates to job postings.
- **Automated Interview Scheduling**: Schedule interviews based on candidate and recruiter availability.
- **Customizable Workflows**: Tailor hiring stages and processes to fit company needs.
- **Insights & Analytics**: Detailed analytics on recruitment performance, diversity metrics, and market trends.
- **Real-Time Skill Gap Analysis**: Compare candidate skills with job requirements for immediate feedback.

## **Tech Stack**
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **AI/ML**: TensorFlow.js, Natural Language Processing
- **Database**: MongoDB, Redis (for caching)
- **DevOps**: Docker, AWS (optional for deployment)

## **Installation**

To get started with the project, clone this repository and follow the instructions below:

## Clone the repository

```bash
git clone https://github.com/yourusername/hirehub.git
```

## Navigate into the directory

```bash
cd hirehub
```

## Install dependencies

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

## Visit the app at http://localhost:3000

## **Usage**

1. **Running Locally**: 
    - Follow the installation steps and run the following command to start the project on your local machine:

    ```bash
    npm run dev
    ```

2. **Building for Production**: 
    - To build the project for production, use:

    ```bash
    npm run build
    npm start
    ```

3. **Environment Variables**: 
    - Create a `.env.local` file in the root directory and add the required environment variables, including:

    ```bash
    DATABASE_URL=your-mongodb-connection-string
    NEXTAUTH_URL=your-authentication-url
    JWT_SECRET=your-jwt-secret
    ```

