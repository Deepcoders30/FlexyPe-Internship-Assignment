# Alerting System for Monitoring Failed POST Requests

## Description
This project is a backend system designed to monitor a specific POST endpoint (`/api/submit`) for failed requests. It tracks invalid requests caused by incorrect headers or an invalid access token and triggers alerts when a threshold is exceeded. The system also logs failed requests in a MongoDB database for further analysis.

## Features
- Validates request headers and access tokens.
- Tracks failed requests from each IP address.
- Sends email alerts when the failed request threshold is breached.
- Logs failed requests with details (IP, timestamp, reason) in MongoDB.
- Exposes an API endpoint to fetch failed request metrics.

## Tech Stack
- **Backend Language**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM(OBJECT DOCUMENT MODEL)**: Mongoose
- **Email Notifications**: Nodemailer (Google's SMTP server)


## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running.


### Steps
1. Clone the repository:

    ```bash
    git clone https://github.com/Deepcoders30/FlexyPe-Internship-Assignment.git
    cd FlexyPe-Internship-Assignment
    ```

    

2. Install dependencies:

    ```bash
    npm install
    ```

    

3. Create a `.env` file in the root directory with the following content:

 ```env
PORT_NUMBER=  // Set it according to you.
DATABASE_URI=  // Go to https://cloud.mongodb.com/ and create DB instance and cluster. Paste Database Connection URL in the DATABASE_URI.
TESTING_ACCESS_TOKEN=qwdrtty322225 // You can use this or create any random number for testing purpose.
EMAIL_ID= // Email address where you want to receive Alert Mail.
PASSWORD= // Instead of using original Gmail password, use temporary app password service of Gmail.
 ```



## Running the Application

To start the application, run the following command:

```bash
npm start
```
