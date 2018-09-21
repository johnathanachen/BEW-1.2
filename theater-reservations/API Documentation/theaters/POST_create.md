# Create Theater

	POST theaters/new

Create a [Theater]. Returns the newly-created object.

## Parameters
### JSON Body Parameters
Field | Data Type | Required | Description
--- | --- | --- | ---
_id | Number | Y | Unique identifier
name | Number | Y | Name of Theater
seats | Array | Y | 2D array of seats
seatsAvailable | Number | Y | Avaiable seats in Theater

## Example
### Request

    POST https://api.localhost:3000/v1/theaters

#### Request Body 
```json
{
    "_id" : 1,
    "name" : "The Royal",
    "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ] ],
    "seatsAvailable" : 73
}
```

### Response
``` json
{
    "status": {
        "text": "OK",
        "status_code": 200
    },
    "result": {
      "_id" : 1,
      "name" : "The Royal",
      "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ] ],
      "seatsAvailable" : 73
  }
}
```


[Theater]: /theater-reservations/API%20Documentation/theaters/README.md
