import app from "./app";

async function startServer() {
  try {
    app.listen(5000, () => {
      console.log(`Server is running on port ${5000}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
