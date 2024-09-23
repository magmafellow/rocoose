import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

const sql = neon('postgresql://rocoose_owner:2PzBTGvA3ZmJ@ep-billowing-poetry-a264reqb-pooler.eu-central-1.aws.neon.tech/rocoose?sslmode=require')
export const db = drizzle(sql)
