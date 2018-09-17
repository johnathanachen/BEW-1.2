# Session Type

    GET sessions/:id
    
Returns a single [Session Type].

## Example
### Request

    GET https://api.localhost:3000/v1/sessions/5500632d2dc02be024ba5c66

### Response
``` json
{
    "status": {
        "text": "OK",
        "status_code": 200
    },
    "result": {
      "_id" : "5500632d2dc02be024ba5c66",
      "theaterId" : 1,
      "name" : "Action Movie 5",
      "description" : "Another action movie",
      "start" : "2015-03-11T15:45:49.103Z",
      "end" : "2015-03-11T15:45:49.103Z",
      "price" : 10,
      "seatsAvailable" : 80,
      "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
      "reservations" : [ {
          "_id": "5500632d2dc02be024ba5c66",
          "seats": [ [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ],
          "price" : 10,
          "total" : 30
        } ]
    }
}
```

[Session Type]: /API%20Documentation/sessions/README.md


