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
- **Database**: MongoDB Atlas (Cloud Version)
- **ODM(Object Document Model)**: Mongoose
- **Email Notifications**: Nodemailer (Google's SMTP server)


## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed.


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
# Port Number: Specify the port the application will run on
PORT_NUMBER=3000  # You can set this to any available port number.

# MongoDB URI: Provide your MongoDB Atlas connection URI
# To obtain your URI, sign up for MongoDB Atlas at https://cloud.mongodb.com/ and create a DB instance and cluster.
# Replace <username> and <password> with your actual credentials.
DATABASE_URI=mongodb+srv://<username>:<password>@flexy-pe.gxliz.mongodb.net/?retryWrites=true&w=majority&appName=flexy-pe
TESTING_ACCESS_TOKEN=qwdrtty322225 // You can use this or create any random number for testing purpose.
EMAIL_ID= // Email address where you want to receive Alert Mail.
PASSWORD= // Instead of using original Gmail password, use temporary app password service of Gmail.
 ```



## Running the Application

To start the application, run the following command:

```bash
nodemon
```


## API Endpoints

### 1. POST `/api/submit`

**Description**:
This endpoint handles POST requests and validates the request headers for `content-type` and `authorization` token. If the request body is empty, an error is returned. Invalid requests are tracked, and alerts are triggered if the threshold for failed requests is exceeded.

**Request Headers**:
- **content-type**: `application/json`
- **authorization**: `Bearer <token>` (must match `TESTING_ACCESS_TOKEN` in `.env` file)

**Request Body**:
```json
{
  "key": "value"
}
```

### 2. GET `/api/metrics`

**Description**:
This endpoint retrieves the metrics for failed requests, including the IP address, reason for failure, and timestamp. It allows monitoring and analysis of failed request patterns.

**Request**:
- **Method**: `GET`

**Response**:

- **200 OK**: Successful request, returns an array of failed request logs
  ```json
  [
    {
      "_id": "678180593adf9698816bfb32",
      "user_ip": "::ffff:127.0.0.1",
      "reason_of_failed_request": "Invalid Content-Type",
      "timestamp": "2025-01-10T20:17:07.716+00:00",
      "__v": 0
    },
    {
      "_id": "6781809e3adf9698816bfb38",
      "user_ip": "::ffff:127.0.0.1",
      "reason_of_failed_request": "Invalid Access Token",
      "timestamp": "2025-01-10T20:17:07.716+00:00",
      "__v": 0
    }
  ]


## How the System Works:

### Request Validation:
When a request is made to the `/api/submit` endpoint, it is validated for:
- **Correct `content-type`**: The request must have the `content-type` set to `application/json`.
- **Valid Authorization token**: The request must include an Authorization header with a token that matches the predefined `TESTING_ACCESS_TOKEN`.

### Failed Request Tracking:
Invalid requests are tracked:
- **MongoDB Logging**: Each failed request is recorded in MongoDB with the following information:
  - IP address of the requester
  - Reason for failure (e.g., invalid content type or invalid token)
  - Timestamp of the failed request
- **Tracking Time Window**: The number of failed requests from each IP is tracked over a 10-minute window time.
- **Threshold Exceed**: If the number of failed requests from the same IP exceeds the specified threshold (e.g., 5 failed requests), an email alert is triggered.

### MongoDB Logging:
Each failed request is logged in MongoDB with the following information:
- **IP address** of the requester
- **Reason for failure** (e.g., invalid content type or invalid token)
- **Timestamp** of the failed request

### Email Alerts:
If the threshold for failed requests is exceeded, an email is sent to the specified email address (configured in `.env`).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

