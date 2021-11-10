const express = require('express');
const Chat = require('../models/chat');


const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({type:'GET'});
});

router.post('/', (req, res, next) => {
    Chat.create(req.body).then((chat) => {
        res.send(chat);
    }).catch(next);
});

router.put('/:id', (req, res, next) => {
    Chat.findByIdAndUpdate({_id: req.params.id}, req.body).then((chat) => {
        res.send(chat);
    });
});

router.delete('/:id', (req, res, next) => {
    Chat
    .findByIdAndRemove({_id: req.params.id}).then((chat) => {
        res.send(chat);
    });
});

module.exports = router;