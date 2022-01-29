const Handlebars = require('handlebars');
const helpers = require('./helpers').functions;
var source = (html) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/public/style.css">
    <link rel="stylesheet" href="/public/bootstrap.min.css">
    <title>Youtube Downloader</title>
</head>
<body>
    <div class="container">
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
                <strong>Youtube Downloader</strong>
            </a>
            </div>
        </div>
    ${html}
    </div>
</body>
</html>`;
/*
<p>Video: {{title}} </p>
                    <p>Channel: {{channel}}</p>
                    <p>Description: {{description}}</p>
*/
Handlebars.registerHelper("formatBytes", helpers.formatBytes);
exports.createDownladpage = (data) => {
    var html = source(`
                    <div class="container">
                    <div class="row">&nbsp;</div>
                        <div class="row">&nbsp;</div>
                        <div class="row">
                            <table width='100%' border='1' cellpadding='10' cellspacing='10'>
                                <thead>
                                    <td>Format</td>
                                    <td>Size</td>
                                    <td>Download</td>
                                </thead>
                                {{#formats}}
                                <tr>
                                    <td>{{format}}</td>
                                    <td>{{formatBytes filesize}}</td>
                                    <td><a href='{{url}}' target='_blank' download>{{../title}}-{{format_note}}.{{ext}}</a></td>
                                </tr>
                                {{/formats}}
                            </table>
                        </div>
                        <div class="row">&nbsp;</div>
                        <div class="row">&nbsp;</div>
                    </div>
                `);
    var template = Handlebars.compile(html);
    var result = template(data);
    return result;
}
exports.createForm = () => {
    var html = source(`
        <div class="container">
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>

        <div class="row"></div>

            <div class="row">
                <div class="col-md-9">
                    <form>
                        <div class="form-group">
                            <label for="url">Enter Url</label>
                            <input type="text" name="url" class="form-control" id="url" required placeholder="https://www.youtube.com/watch?v=-DYEW-UMUe0">
                        </div>
                        <input type="hidden" name="method" value="download">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>`);
    var template = Handlebars.compile(html);
    var result = template();
    return result;
}