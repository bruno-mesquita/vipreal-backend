const express = require('express')();

express.get('/', (req, res) => {
    return res.json({ ok: true });
});

express.listen(3030, () => console.log('Server on'));