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
exports.orderRouter = void 0;
const express_1 = require("express");
const auth_1 = __importStar(require("../../middlewares/auth"));
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
// ✅ Customer routes
router.post("/", (0, auth_1.default)(auth_1.UserRole.CUSTOMER, auth_1.UserRole.ADMIN), order_controller_1.orderController.createOrder);
router.get("/my", (0, auth_1.default)(auth_1.UserRole.CUSTOMER, auth_1.UserRole.ADMIN), order_controller_1.orderController.getMyOrders);
router.get("/my/:id", (0, auth_1.default)(auth_1.UserRole.CUSTOMER, auth_1.UserRole.ADMIN), order_controller_1.orderController.getMyOrderById);
router.patch("/my/:id/cancel", (0, auth_1.default)(auth_1.UserRole.CUSTOMER, auth_1.UserRole.ADMIN), order_controller_1.orderController.cancelOrder);
// ✅ Provider routes
router.get("/provider", (0, auth_1.default)(auth_1.UserRole.PROVIDER, auth_1.UserRole.ADMIN), order_controller_1.orderController.getProviderOrders);
router.patch("/provider/:id/status", (0, auth_1.default)(auth_1.UserRole.PROVIDER), order_controller_1.orderController.updateOrderStatus);
// ✅ Admin routes
router.get("/admin", (0, auth_1.default)(auth_1.UserRole.ADMIN), order_controller_1.orderController.getAllOrders);
exports.orderRouter = router;
//# sourceMappingURL=order.router.js.map