import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://rocoose_owner:2PzBTGvA3ZmJ@ep-billowing-poetry-a264reqb-pooler.eu-central-1.aws.neon.tech/rocoose?sslmode=require',
  },
});
