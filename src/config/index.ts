import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    baseUrl: process.env.BASE_URL
  }
})