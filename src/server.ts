import mongoose from "mongoose";
import app from "./app";
// import seedSuperAdmin from "./app/DB";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    // seedSuperAdmin();
    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
