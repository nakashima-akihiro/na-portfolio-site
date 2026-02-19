import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: '.env.local' });

const token = process.env.NA_PORTFOLIO_SITE_READ_WRITE_TOKEN;
if (!token) {
  console.error('NA_PORTFOLIO_SITE_READ_WRITE_TOKEN が設定されていません');
  process.exit(1);
}

const filePath = resolve('public/sample-cover.svg');
const file = readFileSync(filePath);

const blob = await put('covers/sample-cover.svg', file, {
  access: 'public',
  token,
  contentType: 'image/svg+xml',
});

console.log('アップロード完了:', blob.url);
