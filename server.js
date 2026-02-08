/**
 * Simple Node.js Server for Anniversary Website
 * 
 * Usage:
 *   node server.js
 * 
 * Then visit: http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// MIME types
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

/**
 * Create server
 */
const server = http.createServer((req, res) => {
  // Parse requested URL
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Default to index.html for root
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Construct file path
  const filePath = path.join(__dirname, pathname);

  // Prevent directory traversal attacks
  const realPath = path.resolve(filePath);
  if (!realPath.startsWith(path.resolve(__dirname))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err) {
      // File not found - serve index.html for SPA routing
      if (err.code === 'ENOENT') {
        // Check if it's a directory without trailing slash
        if (pathname.endsWith('/')) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }

        // For SPA routing, serve index.html
        const indexPath = path.join(__dirname, 'index.html');
        fs.readFile(indexPath, (readErr, data) => {
          if (readErr) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
            console.error('Error reading index.html:', readErr);
            return;
          }

          res.writeHead(200, { 'Content-Type': mimeTypes['.html'] || 'text/html' });
          res.end(data);
        });
        return;
      }

      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      console.error('Error:', err);
      return;
    }

    // Check if path is directory
    if (stats.isDirectory()) {
      // Redirect to index.html in directory
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (indexErr) => {
        if (!indexErr) {
          const newPath = pathname + (pathname.endsWith('/') ? '' : '/') + 'index.html';
          res.writeHead(301, { Location: newPath });
          res.end();
        } else {
          res.writeHead(403, { 'Content-Type': 'text/plain' });
          res.end('403 Forbidden');
        }
      });
      return;
    }

    // Read and serve file
    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        console.error('Error reading file:', readErr);
        return;
      }

      // Get file extension
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      // Set cache headers
      const cacheControl = ext === '.html' ? 'no-cache, no-store, must-revalidate' : 'public, max-age=31536000';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': cacheControl,
        'Access-Control-Allow-Origin': '*',
        'X-Content-Type-Options': 'nosniff'
      });

      res.end(data);
    });
  });
});

/**
 * Error handler
 */
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use!`);
    console.error('Try a different port: PORT=3001 node server.js');
    process.exit(1);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

/**
 * Start server
 */
server.listen(PORT, HOST, () => {
  const url = `http://localhost:${PORT}`;
  console.log('');
  console.log('╔════════════════════════════════════════╗');
  console.log('║   Anniversary Website Server Running   ║');
  console.log('╠════════════════════════════════════════╣');
  console.log(`║ 🌐 URL: ${url.padEnd(36)}║`);
  console.log(`║ 🖥️  Host: ${HOST.padEnd(34)}║`);
  console.log(`║ 🔌 Port: ${PORT.toString().padEnd(34)}║`);
  console.log('╠════════════════════════════════════════╣');
  console.log('║ Press Ctrl+C to stop the server        ║');
  console.log('║ Open link above in your browser        ║');
  console.log('║ Share this URL to make it public       ║');
  console.log('╚════════════════════════════════════════╝');
  console.log('');
});

/**
 * Graceful shutdown
 */
process.on('SIGTERM', () => {
  console.log('\n📋 Server shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\n📋 Server shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});
