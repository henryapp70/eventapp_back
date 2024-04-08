const cancelPaymentHandler = async (req, res) => {
    try {
        // Puedes agregar aquí cualquier lógica necesaria para cancelar el pago, si es necesario
        res.redirect('http://localhost:5173/');
    } catch (error) {
        // En caso de que ocurra un error, maneja el error apropiadamente
        console.error("Error cancelling payment:", error);
        res.status(500).send("An error occurred while cancelling the payment");
    }
}

module.exports = cancelPaymentHandler;
