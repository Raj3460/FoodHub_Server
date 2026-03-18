import app from "./app";
import { prisma } from "./lib/prisma";


const PORT = process.env.PORT || 5000;

async function Main() {
       try {
              await prisma.$connect();
              console.log("Connected to the database successfully!");

              // You can perform database operations here using the `prisma` client
              app.listen(PORT, () => {
                     console.log(`Server is running on port ${PORT}`);
              });
              
       } catch (error) {
              console.error("Error occurred:", error);
              await prisma.$disconnect();
              process.exit(1);
       }
       
}

Main();