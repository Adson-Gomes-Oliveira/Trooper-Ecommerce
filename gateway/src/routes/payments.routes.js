const passport = require('passport');
const { Router } = require('express');
const paymentsControllers = require('../controllers/payments.controller');

const router = Router();

router.use(passport.authenticate('bearer', { session: false }));

router.get('/', paymentsControllers.getPayments);
router.get('/:id', paymentsControllers.getOnePayment);
router.post('/', paymentsControllers.createPayment);
router.put('/confirm/:id', paymentsControllers.confirmPayment);
router.patch('/cancel/:id', paymentsControllers.cancelPayment);

module.exports = router;
