// 1. Import dependencies
import { Request, Response } from "express";
import { cartService } from "./cart.service";

// 2. Export controller object
export const cartController = {

  // 3. GET /cart - View cart
  getCart: async (req: Request, res: Response) => {
    try {
      const cart = await cartService.getCart(req.user!.id);
      res.json({ success: true, data: cart || { items: [] } });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch cart",
        error: error.message,
      });
    }
  },

  // 4. GET /cart/summary - Cart summary for checkout
  getCartSummary: async (req: Request, res: Response) => {
    try {
      const summary = await cartService.getCartSummary(req.user!.id);
      res.json({ success: true, data: summary });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch cart summary",
        error: error.message,
      });
    }
  },

  // 5. POST /cart - Add item to cart
  addToCart: async (req: Request, res: Response) => {
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
      const cartItem = await cartService.addToCart(req.user!.id, {
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
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to add item to cart",
        error: error.message,
      });
    }
  },

  // 6. PUT /cart/:itemId - Update quantity
  updateCartItem: async (req: Request, res: Response) => {
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
      const updated = await cartService.updateCartItem(
        req.user!.id,
        itemId,
        quantity
      );

      // 6.3 Return response
      res.json({
        success: true,
        message: quantity > 0 ? "Cart item updated" : "Item removed from cart",
        data: updated,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update cart item",
        error: error.message,
      });
    }
  },

  // 7. DELETE /cart/:itemId - Remove item
  removeFromCart: async (req: Request, res: Response) => {
    try {
      const itemId = Array.isArray(req.params.itemId) ? req.params.itemId[0] : req.params.itemId;

      // 7.1 Validate itemId
      if (!itemId) {
        return res.status(400).json({
          success: false,
          message: "itemId is required",
        });
      }

      await cartService.removeFromCart(req.user!.id, itemId);

      res.json({
        success: true,
        message: "Item removed from cart",
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to remove item",
        error: error.message,
      });
    }
  },

  // 8. DELETE /cart - Clear cart
  clearCart: async (req: Request, res: Response) => {
    try {
      await cartService.clearCart(req.user!.id);

      res.json({
        success: true,
        message: "Cart cleared successfully",
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to clear cart",
        error: error.message,
      });
    }
  },
};