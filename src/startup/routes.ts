import express from 'express';
import {auth} from './../routes/auth'
import {users} from './../routes/users'

export default function(app: express.Application): void {
    app.use('/api/auth', auth);
    app.use('/api/users', users);
}

