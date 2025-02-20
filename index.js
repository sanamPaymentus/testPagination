const express = require('express');
const app = express();

// Sample Data (simulating the provided data)
const data = [
  { key: 'PSQT-1316', description: 'test', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-19T11:59:39.000-0500' },
  { key: 'PSQT-1315', description: 'test', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-19T11:58:15.000-0500' },
  { key: 'PSQT-1314', description: 'asa', summary: 'asa', status: 'In CSR Queue', createdOn: '2025-02-19T11:01:52.000-0500' },
  { key: 'PSQT-1313', description: 'test', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-19T10:59:45.000-0500' },
  { key: 'PSQT-1312', description: 'ABC', summary: 'ABC', status: 'In CSR Queue', createdOn: '2025-02-19T10:48:41.000-0500' },
  { key: 'PSQT-1311', description: 'test', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-19T07:40:25.000-0500' },
  { key: 'PSQT-1309', description: 'test', summary: 'test c', status: 'In CSR Queue', createdOn: '2025-02-18T16:23:16.000-0500' },
  { key: 'PSQT-1308', description: 'test issue when created in future', summary: 'Start Dates in the future', status: 'In CSR Queue', createdOn: '2025-02-18T16:21:27.000-0500' },
  { key: 'PSQT-1307', description: 'start date in future', summary: 'Dates in the past', status: 'In CSR Queue', createdOn: '2025-02-18T16:21:00.000-0500' },
  { key: 'PSQT-1306', description: 'test submit a case', summary: 'test abc', status: 'In CSR Queue', createdOn: '2025-02-18T16:20:00.000-0500' },
  { key: 'PSQT-1305', description: 'testing', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:25:14.000-0500' },
  { key: 'PSQT-1304', description: 'test', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:24:01.000-0500' },
  { key: 'PSQT-1303', description: 'testing', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:21:38.000-0500' },
  { key: 'PSQT-1302', description: 'testing', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:21:02.000-0500' },
  { key: 'PSQT-1301', description: 'testing', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:20:23.000-0500' },
  { key: 'PSQT-1299', description: 'testing', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:19:16.000-0500' },
  { key: 'PSQT-1298', description: 'testing', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:18:22.000-0500' },
  { key: 'PSQT-1297', description: 'test', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:17:03.000-0500' },
  { key: 'PSQT-1296', description: 'test', summary: 'test', status: 'In CSR Queue', createdOn: '2025-02-18T06:14:44.000-0500' }
];

// Pagination function
const paginate = (page = 1, pageSize = 5) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    return data.slice(startIndex, endIndex);
};

// Disable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Route to get paginated data
app.get('/paginated-data', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;
  const paginatedData = paginate(page, pageSize);

  res.json({
    page,
    pageSize,
    totalRecords: data.length,
    totalPages: Math.ceil(data.length / pageSize),
    data: paginatedData
  });
});

// Set up the server
const port = 1790;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
