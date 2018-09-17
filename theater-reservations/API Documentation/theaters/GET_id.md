# Theater Type

    GET theaters/:id
    
Returns a single [Theater Type].

## Example
### Request

    GET https://api.localhost:3000/v1/theaters/1

### Response
``` json
{
    "status": {
        "text": "OK",
        "status_code": 200
    },
    "result": {
        "_id": 1,
        "name": "The Royal",
        "seatsAvailable": 80,
        "seats": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
    }
}
```

[Theater Type]: /theater-reservations/API%20Documentation/theaters/README.md



