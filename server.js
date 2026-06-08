// server.js – ultra‑light static file server (Node only)
// ----------------------------------------------------
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;               // change if you need a different port
const ROOT = __dirname;          // serves files from the quizweb folder

// Minimal MIME lookup table
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.txt': 'text/plain',
};

// --------------------------------------------------------------------
// Main request handler
// --------------------------------------------------------------------
const server = http.createServer((req, res) => {
    // Decode URL, ignore query string
    let reqPath = decodeURIComponent(req.url.split('?')[0]);

    // Default to index.html for root requests
    if (reqPath === '/') reqPath = '/index.html';

    // Resolve to an absolute file path inside ROOT
    const filePath = path.join(ROOT, reqPath);

    // Security: block path traversal (e.g., “…/..”)
    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 – Forbidden');
    }

    // Check if file exists and is a file
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 – Not Found');
        }

        // Determine MIME type
        const ext = path.extname(filePath).toLowerCase();
        const mime = mimeTypes[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });

        // Stream file contents to response
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    });
});

// --------------------------------------------------------------------
// Start listening
// --------------------------------------------------------------------
server.listen(PORT, () => {
    console.log(`🚀 QuizWeb is now running at http://localhost:${PORT}`);
});
