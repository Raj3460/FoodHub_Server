"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const cart_service_1 = require("./cart.service");
// 2. Export controller object
exports.cartController = {
    // 3. GET /cart - View cart
    getCart: async (req, res) => {
        try {
            const cart = await cart_service_1.cartService.getCart(req.user.id);
            res.json({ success: true, data: cart || { items: [] } });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch cart",
                error: error.message,
            });
        }
    },
    // 4. GET /cart/summary - Cart summary for checkout
    getCartSummary: async (req, res) => {
        try {
            const summary = await cart_service_1.cartService.getCartSummary(req.user.id);
            res.json({ success: true, data: summary });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch cart summary",
                error: error.message,
            });
        }
    },
    // 5. POST /cart - Add item to cart
    addToCart: async (req, res) => {
        try {
            const { mealId, quantity, specialInstructions } = req.body;
            // 5.1 Validate mealId
            if (!mealId) {
                return res.status(400).json({
                    success: false,
                    message: "mealId is required",
                });
            }
            // 5.2 Validate quantity
            const qty = quantity || 1;
            if (qty < 1) {
                return res.status(400).json({
                    success: false,
                    message: "Quantity must be at least 1",
                });
            }
            // 5.3 Add to cart
            const cartItem = await cart_service_1.cartService.addToCart(req.user.id, {
                mealId,
                quantity: qty,
                specialInstructions,
            });
            // 5.4 Return response
            res.status(201).json({
                success: true,
                message: "Item added to cart",
                data: cartItem,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to add item to cart",
                error: error.message,
            });
        }
    },
    // 6. PUT /cart/:itemId - Update quantity
    updateCartItem: async (req, res) => {
        try {
            const itemId = Array.isArray(req.params.itemId) ? req.params.itemId[0] : req.params.itemId;
            const { quantity } = req.body;
            // 6.1 Validate itemId
            if (!itemId) {
                return res.status(400).json({
                    success: false,
                    message: "itemId is required",
                });
            }
            // 6.2 Validate quantity
            if (quantity === undefined) {
                return res.status(400).json({
                    success: false,
                    message: "quantity is required",
                });
            }
            // 6.3 Update item
            const updated = await cart_service_1.cartService.updateCartItem(req.user.id, itemId, quantity);
            // 6.3 Return response
            res.json({
                success: true,
                message: quantity > 0 ? "Cart item updated" : "Item removed from cart",
                data: updated,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to update cart item",
                error: error.message,
            });
        }
    },
    // 7. DELETE /cart/:itemId - Remove item
    removeFromCart: async (req, res) => {
        try {
            const itemId = Array.isArray(req.params.itemId) ? req.params.itemId[0] : req.params.itemId;
            // 7.1 Validate itemId
            if (!itemId) {
                return res.status(400).json({
                    success: false,
                    message: "itemId is required",
                });
            }
            await cart_service_1.cartService.removeFromCart(req.user.id, itemId);
            res.json({
                success: true,
                message: "Item removed from cart",
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to remove item",
                error: error.message,
            });
        }
    },
    // 8. DELETE /cart - Clear cart
    clearCart: async (req, res) => {
        try {
            await cart_service_1.cartService.clearCart(req.user.id);
            res.json({
                success: true,
                message: "Cart cleared successfully",
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to clear cart",
                error: error.message,
            });
        }
    },
};
//# sourceMappingURL=cart.controller.js.map