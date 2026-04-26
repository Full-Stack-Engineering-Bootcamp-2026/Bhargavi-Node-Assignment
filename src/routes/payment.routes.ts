import express from 'express'
import { createPaymentLink } from '../controllers/payment.controller';

const router = express.Router();

router.post('/',createPaymentLink)


export default router