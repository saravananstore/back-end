import mysql from 'mysql2/promise';

export const dbConnection = async () => {
    let singleStoreConnection;
    try {
      singleStoreConnection = await mysql.createConnection({
        host: `svc-56d69c03-6028-4563-85f5-3b19ec86a4f6-ddl.aws-mumbai-1.svc.singlestore.com`,
        user: `admin`,
        password: `z@UssOQT*#a-@j((DZKK`,
        database: `saravanan_store`
      });
  
      console.log("You have successfully connected to SingleStore.");
    } catch (err) {
      console.error('ERROR', err);
      process.exit(1);
    } finally {
      if (singleStoreConnection) {
        await singleStoreConnection.end();
      }
    }
  }