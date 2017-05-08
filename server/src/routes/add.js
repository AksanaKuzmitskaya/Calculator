const express = require("express");
const router = express.Router();

router.post('/add', (req, res) => {
    const x = req.body.x;
    const y = req.body.y;
    const result = x + y;
    res.send({
        result: result
    });
});

module.exports = router;