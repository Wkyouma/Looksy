import mysql2 from 'mysql2/promise';


const db = mysql2.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'Yhtlzo123@',   
  database: 'pinterest' 
});

export { db };

