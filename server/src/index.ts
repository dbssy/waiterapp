import mongoose from 'mongoose';

import { server } from './server';

import envConfig from './config/envConfig';

if (envConfig.dbURI) {
  mongoose.connect(envConfig.dbURI)
    .then(() => {
      console.log('📦 Database is connected');
      server.listen(envConfig.port, () => console.log(`🚀 Server is running on ${envConfig.host}:${envConfig.port}`));
    })
    .catch((error: Error) => {
      console.log(`Failed to connect to the database: ${error.message}`);
    });
} else {
  console.error('Please check your database connection settings and try again');
}
