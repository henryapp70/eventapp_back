endpoints:
    Users:  
        http://localhost:3001/api/v1/getallusers  
        http://localhost:3001/api/v1/getoneuser/:id  
        http://localhost:3001/api/v1/register  
        http://localhost:3001/api/v1/login  
        http://localhost:3001/api/v1/status/:id_user/:status
        http://localhost:3001/api/v1/usertype/:id_user/:type_user
        http://localhost:3001/api/v1/userchange/:id_user



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

        GET http://localhost:3001/api/v1/ticket/event/review/:idUser
        this returns all the events that a user has purchased a ticket

        GET http://localhost:3001/api/v1/event/review/:idEvent/:idUser
        this returns all the reviews associated to that event that belongs to that user

    Tickets:
        POST http://localhost:3001/api/v1/createticket/:id
            Content-Type: application/json

            {
                "ticket_type": 3
                "price": 45
                "available_quantity": 5000
                "sell_by_date": "2024-09-09"
                "price_cat": ""
            }
        
        POST http://localhost:3001/api/v1/updateticket/:id
            Content-Type: application/json

            {
                "ticket_type": 3
                "price": 45
                "available_quantity": 5000
                "sell_by_date": "2024-09-09"
                "price_cat": ""
            }
    