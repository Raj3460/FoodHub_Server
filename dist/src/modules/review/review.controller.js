"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const review_service_1 = require("./review.service");
const prisma_1 = require("../../lib/prisma");
exports.reviewController = {
    // POST /reviews – Customer creates a review
    createReview: async (req, res) => {
        try {
            const { orderId, mealId, rating, title, comment } = req.body;
            if (!orderId || !mealId || !rating) {
                return res.status(400).json({
                    success: false,
                    message: "orderId, mealId and rating are required",
                });
            }
            if (rating < 1 || rating > 5) {
                return res.status(400).json({
                    success: false,
                    message: "Rating must be between 1 and 5",
                });
            }
            const review = await review_service_1.reviewService.createReview(req.user.id, {
                orderId,
                mealId,
                rating,
                title,
                comment,
            });
            res.status(201).json({
                success: true,
                message: "Review added successfully",
                data: review,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to create review",
            });
        }
    },
    // GET /meals/:mealId/reviews – Public: get reviews for a meal
    getMealReviews: async (req, res) => {
        try {
            const { mealId } = req.params;
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const reviews = await review_service_1.reviewService.getMealReviews(mealId, limit);
            res.json({ success: true, data: reviews });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch reviews",
                error: error.message,
            });
        }
    },
    // GET /my-reviews – Customer's own reviews
    getMyReviews: async (req, res) => {
        try {
            const reviews = await review_service_1.reviewService.getMyReviews(req.user.id);
            res.json({ success: true, data: reviews });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch your reviews",
                error: error.message,
            });
        }
    },
    // PUT /reviews/:id – Update own review
    updateReview: async (req, res) => {
        try {
            const { id } = req.params;
            const { rating, title, comment } = req.body;
            const updated = await review_service_1.reviewService.updateReview(id, req.user.id, { rating, title, comment });
            res.json({
                success: true,
                message: "Review updated successfully",
                data: updated,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to update review",
            });
        }
    },
    // DELETE /reviews/:id – Delete own review
    deleteReview: async (req, res) => {
        try {
            const { id } = req.params;
            await review_service_1.reviewService.deleteReview(id, req.user.id);
            res.json({
                success: true,
                message: "Review deleted successfully",
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to delete review",
            });
        }
    },
    // PATCH /reviews/:id/respond – Provider responds to review (optional)
    respondToReview: async (req, res) => {
        try {
            const { id } = req.params;
            const { response } = req.body;
            if (!response) {
                return res.status(400).json({
                    success: false,
                    message: "Response text is required",
                });
            }
            // Find provider profile associated with the logged-in user
            const provider = await prisma_1.prisma.provider.findUnique({
                where: { userId: req.user.id },
                select: { id: true },
            });
            if (!provider) {
                return res.status(403).json({
                    success: false,
                    message: "Provider profile not found",
                });
            }
            const updated = await review_service_1.reviewService.respondToReview(id, provider.id, response);
            res.json({
                success: true,
                message: "Response added",
                data: updated,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to respond to review",
            });
        }
    },
};
//# sourceMappingURL=review.controller.js.map