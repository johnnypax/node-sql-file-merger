const fs = require('fs');
const path = require('path');

// Directory in cui cercare i file SQL
const directoryPath = path.join(__dirname, 'SQL');

// Funzione ricorsiva per ottenere tutti i file SQL presenti nella directory e sottodirectory
function getSQLFiles(dirPath, fileList = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      getSQLFiles(filePath, fileList);
    } else if (path.extname(filePath).toLowerCase() === '.sql') {
      fileList.push(filePath);
    }
  });

  console.log(fileList);
  return fileList;
}

// Funzione per unire i contenuti dei file SQL
function mergeSQLFiles(fileList) {
  const mergedContent = fileList
    .map(filePath => fs.readFileSync(filePath, 'utf-8'))
    .join('\n\n');

  fs.writeFileSync('merged.sql', mergedContent, 'utf-8');
}

// Ottieni la lista dei file SQL
const sqlFiles = getSQLFiles(directoryPath);

// Unisci i contenuti dei file SQL
mergeSQLFiles(sqlFiles);

console.log('File SQL uniti con successo in merged.sql');