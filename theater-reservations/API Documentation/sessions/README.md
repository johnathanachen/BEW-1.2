# Session Object
  
Field | Data Type | Description
--------- | ----------- | -----------
_id | ObjectId | Unique identifier
theaterId | Number | [Theater] id
name | String | movie title
description | String | description of movie
start | Date | start date
end | Date | end date
price | Number | price of ticket
seatsAvailable | Number | number of seats open
seats | Mixed | 2D array of seats
reservations | Array | [[Reservation]]
  
[Theater]: /API%20Documentation/Theater/README.md
[Reservation]: /API%20Documentation/Reservation/reservation.md
