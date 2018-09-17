# Create Session

	POST sessions/
 
## Parameters
### JSON Body Parameters
Field | Data Type | Required | Description
--- | --- | --- | ---
theaterId | Number | Y | [Theater] id
name | String | Y | Name of movie
description | String | Y | description of movie
start | Date | N | 
end | Date | N |
price | Number  | Y | 
seatsAvailable | Number | Y |
seats | Array | Y |
reservations | [[Reservation]] | Y |

## Example
### Request

    POST https://api.localhost:3000/v1/sessions

#### Request Body 
```js
  {
    "theaterId": 1,
    "name" : "21 Jump Street",
    "description" : "Another action movie",
    "start" : "2015-03-11T15:00:00.000Z",
    "end" : "2015-03-11T16:00:00.000Z",
    "price" : 10,
    "seatsAvailable" : 80,
    "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
    "reservations" : [ {
      "seats": [ [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ],
      "price" : 10,
      "total" : 30
    } ]
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
	    "theaterId": 1,
	    "name" : "21 Jump Street",
	    "description" : "Another action movie",
	    "start" : "2015-03-11T15:00:00.000Z",
	    "end" : "2015-03-11T16:00:00.000Z",
	    "price" : 10,
	    "seatsAvailable" : 80,
	    "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
	    "reservations" : [ {
	      "seats": [ [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ],
	      "price" : 10,
	      "total" : 30
	    } ]
	}
    }
}
```


[Theater]: /API%20Documentation/Theater/README.md
[Reservation]: /API%20Documentation/Reservation/README.md
