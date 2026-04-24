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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerRouter = void 0;
const express_1 = __importDefault(require("express"));
const provider_controller_1 = require("./provider.controller");
const auth_1 = __importStar(require("../../middlewares/auth"));
const router = express_1.default.Router();
// ✅ 1. Public static routes
router.get("/", provider_controller_1.providerController.getAllProviders);
// ✅ 2. Private static routes
router.post("/profile", (0, auth_1.default)(auth_1.UserRole.PROVIDER, auth_1.UserRole.ADMIN), provider_controller_1.providerController.createProviderProfile);
router.get("/my/profile", (0, auth_1.default)(auth_1.UserRole.PROVIDER, auth_1.UserRole.ADMIN), provider_controller_1.providerController.getMyProviderProfile);
router.put("/my/profile", (0, auth_1.default)(auth_1.UserRole.PROVIDER, auth_1.UserRole.ADMIN), provider_controller_1.providerController.updateMyProviderProfile);
router.get("/stats", (0, auth_1.default)(auth_1.UserRole.PROVIDER, auth_1.UserRole.ADMIN), provider_controller_1.providerController.getStats);
router.get("/meals", (0, auth_1.default)(auth_1.UserRole.PROVIDER, auth_1.UserRole.ADMIN), provider_controller_1.providerController.getMyMeals);
// ✅ 3. Admin routes
router.patch("/approve/:id", (0, auth_1.default)(auth_1.UserRole.ADMIN), provider_controller_1.providerController.approveProvider);
router.get("/admin/all", (0, auth_1.default)(auth_1.UserRole.ADMIN), provider_controller_1.providerController.getAllProvidersForAdmin);
// ✅ 4. Dynamic route — সবার শেষে
router.get("/:id", provider_controller_1.providerController.getProviderById);
exports.providerRouter = router;
//# sourceMappingURL=provider.router.js.map