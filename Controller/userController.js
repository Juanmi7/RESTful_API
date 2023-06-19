const express = require('express');
const router = express.Router();


//Get , Obtenemos todos los usuarios

router.get('/', (req, res) => {
    res.send('Get all collection users');
});

//Get , Obtenemos un unico usuario por id

router.get('/:id', (req, res) => {
    res.send('Get one users ${req.params.id}');
}
);

//Crear un usuario
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST one user ${req.body.name}');
}
);

//Borrar un usuario
router.delete('/:id', (req, res) => {
    res.send('Delete one user ${req.params.id}');
}
);

//Actualiza un usuario
router.patch('/:id', (req, res) => {
    res.send('Patch user ${req.params.id}');
}
);

module.exports = router;