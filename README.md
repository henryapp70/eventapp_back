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

        to update event status
        http://localhost:3001/api/v1/updateevent/:idUser/:idEvent/:status
        http://localhost:3001/api/v1/updateevent/2/1/false

    Sponsors:
        http://localhost:3001/api/v1/sponsor
        http://localhost:3001/api/v1/sponsor
        http://localhost:3001/api/v1/sponsor/:id
        http://localhost:3001/api/v1/sponsor/:id

        to update sponsor status
        http://localhost:3001/api/v1/sponsor/:idSponsor/:status
        http://localhost:3001/api/v1/sponsor/1/false


