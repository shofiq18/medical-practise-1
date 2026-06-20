

import app from "./app.js";
import config from "./config/index.js";
import { Server } from "http";
import { prisma } from "./config/prisma.js";


async function bootstrap() {
  // This variable will hold our sever instance 
  let server: Server;

  try {

    // Test the database connection
    await prisma.$connect();
    console.log("Database connected successfully!");
    // start the server 
    server = app.listen(config.port, () => {
      console.log(
        `Server running on port ${config.port}`
      );
    })

    // function to gracefully shut down the server 
    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.log('sever closed gracefully ');
          process.exit(1);
        })
      } else {
        process.exit(1);
      }
    }

    process.on('unhandledRejection', (error) => {
      console.log('unhandledRejection error is', error);
      exitHandler();
    })

    process.on('uncaughtException', (error) => {
      console.log('uncaughtException error is', error);
      exitHandler();
    })

  } catch (error) {
    console.log(`Failed to connect to database`, error)

  }
}


bootstrap();
