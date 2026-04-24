"use strict";
// src/middlewares/auth.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const auth_1 = require("../lib/auth");
var UserRole;
(function (UserRole) {
    UserRole["CUSTOMER"] = "CUSTOMER";
    UserRole["ADMIN"] = "ADMIN";
    UserRole["PROVIDER"] = "PROVIDER";
})(UserRole || (exports.UserRole = UserRole = {}));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            // get user session
            const session = await auth_1.auth.api.getSession({
                headers: req.headers,
            });
            // console.log("session , " , session);
            if (!session) {
                return res.status(401).json({
                    success: false,
                    message: "You are not authorized! auth",
                });
            }
            if (!session.user.emailVerified) {
                return res.status(403).json({
                    success: false,
                    message: "Email verification required. Please verfiy your email!",
                });
            }
            req.user = {
                id: session.user.id,
                email: session.user.email,
                name: session.user.name,
                role: session.user.role,
                emailVerified: session.user.emailVerified,
            };
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden! You don't have permission to access this resources!",
                });
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.default = auth;
//# sourceMappingURL=auth.js.map