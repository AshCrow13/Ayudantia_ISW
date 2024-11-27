"use strict";
import passport from 'passport';

export function authenticateJwt(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => { // session: false para no crear una sesión en el servidor
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (!user) {
            return res.status(401).json({ 
                message: 'Unauthorized',
                info: info ? info.message : "No se entocntró el usuario" // info.message es el mensaje que se pasa en done(null, false, { message: 'mensaje' })
            });
        }
        req.user = user;
        next();
    })(req, res, next);
}