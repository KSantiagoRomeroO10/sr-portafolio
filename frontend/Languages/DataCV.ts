import * as fs from 'fs';

import Index from "./Interfaces/About/Index";

const DataCV: Index = JSON.parse(fs.readFileSync('./Languages/English.json', 'utf-8'));

// export function printData(data: Index) {
//   console.log(data);
// }

export default DataCV
