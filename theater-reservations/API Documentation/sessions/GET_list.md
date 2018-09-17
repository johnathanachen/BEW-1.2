# Sessions List
    GET sessions/
    
Returns a list of current [Sessions] for all [Theater]

## Example
### Request

    GET https://api.localhost:3000/v1/sessions

### Response
``` json
{
    "status": {
        "text": "OK",
        "status_code": 200
    },
    "result": {
          "_id":"5500632d2dc02be024ba5c66",
          "theaterId":1,
          "name":"Action Movie 5",
          "description":"Another action movie",
          "price":10,
          "seatsAvailable":80,
          "reservations": [
             {
                "total":30,
                "price":10,
                "seats":[
                   [1,5],
                   [1,6],
                   [1,7]
                ],
                "_id":"5500632d2dc02be024ba5c66"
             }
          ],
          "seats": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
          "end":"2015-03-11T15:45:49.103Z",
          "start":"2015-03-11T15:45:49.103Z"
     }
  }
```

[Theater]: API%20Documentation/theaters/README.md
[Sessions]: API%20Documentation/sessions/README.md
