const express = require("express");
const Stripe = require("stripe");
const User = require("../models/User");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
console.log(req.body.userId)
const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });
    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                  name: item.title,
                  description: item.description,
                  metadata:{
                    id: req.body.userId
                  }
                },
                unit_amount: item.price * 100,
              },
              quantity: item.quantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
      });
    
  res.send({url: session.url });
});

module.exports = router;