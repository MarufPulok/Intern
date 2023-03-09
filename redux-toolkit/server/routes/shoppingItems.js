const router = require('express').Router()
let ShoppingItem = require('../models/shoppingItem')

router.route('/').get((req, res) => {
    ShoppingItem.find()
        .then((shoppingItems) => res.json(shoppingItems))
        .catch((err) => res.status(400).json(`Error: ${err}`));
})


router.route('/:id').get((req, res) => {
    ShoppingItem.findById(req.params.id)
        .then((shoppingItem) => res.json(shoppingItem))
        .catch((err) => res.status(400).json(`Error: ${err}`));
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const quantity = Number(req.body.quantity);

    const newShoppingItem = new ShoppingItem({
        name,
        quantity,
    })

    newShoppingItem.save()
        .then(() => res.json('Shopping Item added!'))
        .catch((err) => res.status(400).json(`Error: ${err}`))
})


router.route('/:id').delete((req, res) => {
    ShoppingItem.findByIdAndDelete(req.params.id)
        .then(() => res.json('Shopping item deleted.'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
})

router.route('/update/:id').post((req, res) => {
    ShoppingItem.findById(req.params.id)
        .then((shoppingItem) => {
            shoppingItem.name = req.body.name;
            shoppingItem.quantity = Number(req.body.quantity)

            shoppingItem.save()
                .then(() => res.json('Shopping item updated!'))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
})

module.exports = router;
