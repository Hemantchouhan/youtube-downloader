const http = require('http');
const url = require('url');
const fs = require('fs');
const template = require('./template');
const requestListener = async function (req, res) {
    const urlParams = url.parse(req.url, true);
    console.log(urlParams);
    if (urlParams.pathname.includes('/public/')) {
        try {
            const data = fs.readFileSync(__dirname + req.url);
            res.writeHead(200);
            res.end(data);
            return;
        } catch (error) {
            res.writeHead(404);
            res.end(JSON.stringify(error));
            return;
        }
    }
    res.writeHead(200, { 'content-type': 'text/html' });
    if (urlParams.query.method && urlParams.query.method === 'download') {
        const youtubedl = require('youtube-dl-exec');
        const details = await youtubedl(urlParams.query.url, {
            dumpSingleJson: true,
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true
        });
        const html = template.createDownladpage(details);
        return res.end(html);
    }
    const html = template.createForm();
    return res.end(html);
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 5000);

