"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = require("express");
const cart_controller_1 = require("./cart.controller");
const auth_1 = __importStar(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
// All cart routes require authentication (Customer only)
router.use((0, auth_1.default)(auth_1.UserRole.CUSTOMER, auth_1.UserRole.ADMIN));
router.get("/", cart_controller_1.cartController.getCart);
router.get("/summary", cart_controller_1.cartController.getCartSummary);
router.post("/", cart_controller_1.cartController.addToCart);
router.put("/:itemId", cart_controller_1.cartController.updateCartItem);
router.delete("/:itemId", cart_controller_1.cartController.removeFromCart);
router.delete("/", cart_controller_1.cartController.clearCart);
exports.cartRouter = router;
//# sourceMappingURL=cart.router.js.map