import  express, { Router } from "express";
import { providerController } from "./provider.controller";
import auth, { UserRole } from "../../middlewares/auth";


const router = express.Router();


// ✅ Public routes
router.get("/", providerController.getAllProviders);
router.get("/:id", providerController.getProviderById);

// ✅ Provider only routes
router.post("/profile", auth(UserRole.PROVIDER , UserRole.ADMIN), providerController.createProviderProfile);
router.get("/my/profile", auth(UserRole.PROVIDER , UserRole.ADMIN), providerController.getMyProviderProfile);
router.put("/my/profile", auth(UserRole.PROVIDER , UserRole.ADMIN), providerController.updateMyProviderProfile);

// ✅ Admin only routes
router.patch("/approve/:id", auth(UserRole.ADMIN ), providerController.approveProvider);
router.get("/admin/all", auth(UserRole.ADMIN  ), providerController.getAllProvidersForAdmin);

export const providerRouter = router;