const Handlebars = require('handlebars');
const helpers = require('./helpers').functions;

Handlebars.registerHelper("formatBytes", helpers.formatBytes);
exports.createDownladpage = (data) =>{
    var source = `
                <button onclick="history.back()">Back</button> 
                <p>Video: {{title}} </p>
                 <p>Channel: {{channel}}</p>
                 <p>Description: {{description}}</p>
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
                    <script>
                    </script>
                `;
    var template = Handlebars.compile(source);
    var result = template(data);
    return result;
}
exports.createForm = ()=>{
    const source = `
    <form style="margin:20%">
      <label for="url">URL:</label><br>
      <input type="text" id="url" name="url" required value="" placeholder="https://www.youtube.com/watch?v=-DYEW-UMUe0"><br>
      <input type="hidden" name="method" value="download">
      <input type="submit" value="Submit">
    </form>
    `;
    var template = Handlebars.compile(source);
    var result = template();
    return result;
}