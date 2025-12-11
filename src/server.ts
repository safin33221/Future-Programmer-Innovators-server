import type { Server } from "http"
import app from "./app";

async function startSever() {
    let server: Server;
    try {
        server = app.listen(5000, () => {
            console.log(`🚀 Server is running on http://localhost:5000`);
        })

        const exitHandler = () => {
            if (server) {
                server.close(() => {
                    console.log("server closed successfully");
                    process.exit(1)
                })
            } else {
                process.exit(1)
            }
        }

        process.on("unhandledRejection", (error) => {
            console.log('Unhandled Rejection is detected, we are closing our server...');
            if (server) {
                server.close(() => {
                    console.log("server closed successfully");
                    process.exit(1)
                })
            } else {
                process.exit(1)
            }
        })
    } catch (error) {
        console.error('Error during server startup:', error);
        process.exit(1)
    }
}

startSever()