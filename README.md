endpoints:
    Users:  
        http://localhost:3001/api/v1/getallusers  
        http://localhost:3001/api/v1/getoneuser/:id  
        http://localhost:3001/api/v1/register  
        http://localhost:3001/api/v1/login  

    Payment:
        http://localhost:3001/api/v1/payment/create-checkout-session            //(POST)
        http://localhost:3001/api/v1/payment/success                            //(GET)
        http://localhost:3001/api/v1/payment/cancel                             //(GET)
        