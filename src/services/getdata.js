import fs from 'fs'
export function readFile() {
  const data = fs.readFileSync('usersdata.txt', 'utf8');
  console.log('All users data from Database:\n', data); 
  return data;
}

