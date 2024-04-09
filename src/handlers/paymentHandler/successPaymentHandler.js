const successPaymentHandler = async (req, res) => {
    try {
        // Puedes agregar aquí cualquier lógica necesaria para procesar el pago exitoso

        // Envía una respuesta HTML con un mensaje de confirmación
        res.send(`
            <html>
            <head>
                <title>Payment Success</title>
            </head>
            <body>
                <h1>Thank you for your purchase!</h1>
                <p>Your payment was successful.</p>
                <p>Redirecting you to the home page...</p>
                <script>
                    setTimeout(function() {
                        window.location.href = 'http://localhost:5173/';
                    }, 3000); // Redirige al usuario a la página de inicio después de 3 segundos
                </script>
            </body>
            </html>
        `);
    } catch (error) {
        // En caso de que ocurra un error, maneja el error apropiadamente
        console.error("Payment error:", error);
        res.status(500).send("An error occurred while processing the payment");
    }
}

module.exports = successPaymentHandler;
