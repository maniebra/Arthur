const yargs = require('yargs');
const fs = require('fs');

const app_name = yargs.argv._[0];
const app_path = __dirname + "/../../../" + `apps/${app_name}`;

if (fs.existsSync(app_path)) {
    console.error(`App with name ${app_name} already exists`);
    process.exit(1);
}

fs.mkdirSync(app_path);

const sampleModelsFile = fs.readFileSync(__dirname + "/sample_files/models.sample", "utf8").replace(/\$1/g, app_name);
const sampleConfigFile = fs.readFileSync(__dirname + "/sample_files/app.config.sample", "utf8").replace(/\$1/g, app_name);
const sampleControllerFile = fs.readFileSync(__dirname + "/sample_files/controller.sample", "utf8").replace(/\$1/g, app_name);
const sampleRoutesFile = fs.readFileSync(__dirname + "/sample_files/routes.sample", "utf8").replace(/\$1/g, app_name);

fs.writeFileSync(`${app_path}/models.ts`, sampleModelsFile);
fs.writeFileSync(`${app_path}/app.config.ts`, sampleConfigFile);
fs.writeFileSync(`${app_path}/controller.ts`, sampleControllerFile);
fs.writeFileSync(`${app_path}/routes.ts`, sampleRoutesFile);