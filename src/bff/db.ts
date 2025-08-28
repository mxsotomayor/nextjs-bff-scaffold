import postgres from 'postgres';
 
export const sql = postgres(process.env.POSTGRES_URL!, {
  // ssl: 'require',
  max: 10, // maximum number of connections in the pool
  idle_timeout: 30, // close idle connections after 30 seconds   
  connect_timeout: 5, // return an error after 5 seconds if connection could not be established
});