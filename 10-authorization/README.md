# JWT Authorization with Express

## What's Inside

| Dependencies     | Description                                                |
| -------------    | -------------                                              |
| ExpressJS        |                                                            |
| Bootstrap 3      |                                                            |
| jsonwebtoken     | used to create, sign, and verify tokens (Authentication)   |
| express-jwt      |  protect routes (Authroization)                            |
| js-cookie        |                                                            |
| cookie-parser    |  read cookies (needed for auth)                            |
| body-parser      |  get info from POST and/or URL parameters                  |
| morgan           |  log every request to the console                          |
| jQuery           |                                                            |
| Mongoose         |                                                            |

# Retrieve Token

    POST /token
    
x-www-form-urlencoded
- name: johnny admin
- password: password

``` json
{
    "success": true,
    "message": "Enjoy your token!",
    "token": "eyJhbGcinR5c7ed264JZrzwI.eyJhZG1pbiI6dHJ1ZSwiaWF0IOiJIUzI1NiIsIMjYyNTM2LCJleHAiOjE1MzgyNjM5NzZ9.vTvklNTHY9OiJIUzI1NiIsI52TiAsw39CqV-s"
}
```

# Authorization

    GET /api

## URI Parameters
Field | Description
--- | --- |
Token | JWT token from /token

## Example
### Request
    GET /api?token={jwt-token}

### Response
``` json
{
    "message": "Welcome to the coolest API on earth!"
}
```
