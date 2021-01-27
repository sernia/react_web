const fs = require('fs');
const path = require('path');
const original_glob = require("glob");
const util = require('util');
const glob = util.promisify(original_glob);

// ルートパスを設定
const root = path.resolve('./', 'api');

(async () => {
    const api = {};
    const routes = {};
    const json_file_path_list = await glob('./mock/json-server/api/**/*.json');
    for(let file_path of json_file_path_list) {
        let json_mock_servers_endpoint = file_path.substring(19, file_path.lastIndexOf('.'));
        const real_endpoint = `${json_mock_servers_endpoint.replace(/__/g, '/')}`;

        api[json_mock_servers_endpoint] = JSON.parse(fs.readFileSync(file_path, {encoding: 'utf8'}));
        routes[`/${real_endpoint}`] = `/${json_mock_servers_endpoint}`;
    }
    //fs.writeFileSync('./mock/json-server/routes.json', JSON.stringify(routes, null, '  '), {encoding: 'utf8'});
    //fs.writeFileSync('./mock/json-server/db.json', JSON.stringify(api, null, '  '), {encoding: 'utf8'});
})();

