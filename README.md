endpoints:
    Users:  
        http://localhost:3001/api/v1/getallusers  
        http://localhost:3001/api/v1/getoneuser/:id  
        http://localhost:3001/api/v1/register  
        http://localhost:3001/api/v1/login  


    Events:
        http://localhost:3001/api/v1/getallevents
        http://localhost:3001/api/v1/getallevents?search=&city=&category=&access=&order=
        http://localhost:3001/api/v1/getallevents/:id
        http://localhost:3001/api/v1/registerevent/:id
        http://localhost:3001/api/v1/updateevent/:idUser/:idEvent
        http://localhost:3001/api/v1/deleteevent/:idUser/:idEvent

        update event status
        http://localhost:3001/api/v1/updateevent/:idUser/:idEvent/:status

    Sponsors:
        http://localhost:3001/api/v1/sponsor
        http://localhost:3001/api/v1/sponsor
        http://localhost:3001/api/v1/sponsor/:id
        http://localhost:3001/api/v1/sponsor/:id

        update sponsor status
        http://localhost:3001/api/v1/sponsor/:id/:status


    Payment:
        http://localhost:3001/api/v1/payment/create-checkout-session            //(POST)
        http://localhost:3001/api/v1/payment/success                            //(GET)
        http://localhost:3001/api/v1/payment/cancel                             //(GET)
    

    Reviews(Rating):
    POST http://localhost:3001/api/v1/event/review
    Content-Type: application/json

        {
        "id_event": 4,
        "id_user": 2,
        "comment": "some awesome comment!",
        "value": 4
        }

    GET http://localhost:3001/api/v1/event/review/:idEvent
    this returns all the reviews associated to that event