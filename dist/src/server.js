"use strict";
// src/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const prisma_1 = require("./lib/prisma");
const PORT = process.env.PORT || 5000;
async function Main() {
    try {
        await prisma_1.prisma.$connect();
        console.log("Connected to the database successfully!");
        // You can perform database operations here using the `prisma` client
        app_1.default.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error occurred:", error);
        await prisma_1.prisma.$disconnect();
        process.exit(1);
    }
}
Main();
//# sourceMappingURL=server.js.map