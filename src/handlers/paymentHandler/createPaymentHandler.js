const { createSession } = require("../../controllers/paymentController/createPaymentController");

const createPaymentHandler = async (req, res) => {
    try {
        // Llama a la función del controlador para crear la sesión de pago
        const sessionId = await createSession(req, res);
        
        // Envía una respuesta indicando que el pago ha sido creado
        res.status(200).send(sessionId);
    } catch (error) {
        // En caso de que ocurra un error, maneja el error apropiadamente
        console.error("Create payment error:", error);
        res.status(500).send("An error occurred while creating the payment");
    }
}

module.exports = createPaymentHandler;

