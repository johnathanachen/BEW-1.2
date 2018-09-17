# Update Theater

    PUT theater/:id
    
Updates a **[Theater](/API%20Documentation/theaters/README.md)** and returns the updated object

## Parameters
### JSON Body Parameters
Field | Data Type | Required | Description
--- | --- | --- | ---
name | Number | N | Name of Theater
seats | Array | N | 2D array of seats
seatsAvailable | Number | N | Avaiable seats in Theater

## Example
### Request

    PUT https://api.localhost:3000/v1/theaters/1

#### Request Body 
```json
{
    "seatsAvailable": 73
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


