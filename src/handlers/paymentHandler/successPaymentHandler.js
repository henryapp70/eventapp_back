const successPaymentHandler = async (req, res) => {
    try {
        // Puedes agregar aquí cualquier lógica necesaria para cancelar el pago, si es necesario
        
        // Envía una respuesta indicando que el pago ha sido cancelado
        res.status(200).send("Payment Success");
    } catch (error) {
        // En caso de que ocurra un error, maneja el error apropiadamente
        console.error("Payment error:", error);
        res.status(500).send("An error occurred while processing the payment");
    }
}

module.exports = successPaymentHandler;