const fs = require('fs');

const encode_string = (str) => {
    return Buffer.from(str).toString('base64');
}

const getVersion = () => new Promise((resolve, reject) => {
    fs.readFile("version.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const dataObj = JSON.parse(data);
        resolve(dataObj);
    });
})
    
/*
params like:
{
    "VERSONS": "foo",
    "LatestVersionPlaceHolder": "bar"
}
*/
const replace_file = (path, params) => {
    fs.readFile(path, 'utf8', (err, data) => {
        fs.writeFileSync(path + '.bak', data);
        if (err) {
            console.error(err);
            return;
        }
        let newData = data.toString();
        for (const key in params) {
            newData = newData.replaceAll(`|| ${key} ||`, params[key]);
        }
        fs.writeFile(path, newData, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Successfully replaced ${path}`);
        });
    });
}

getVersion().then((versions) => {
    const latestVersion = versions[0];
    const params = {
        "VERSIONS": versions.map(i => `
## [⏬](/download/?link=${encode_string(i.link)}&version=${encode_string(i.version)}) ${i.date} ${i.version}
${i.changes.map(j => ` - ${j}`).join('\n')} 
        `),
        "LatestVersionLinkPlaceHolder": encode_string(latestVersion.link),
        "LatestVersionPlaceHolder": latestVersion.version,
        "LatestVersionPlaceHolderEncoded": encode_string(latestVersion.version),
        "ReleaseTime": latestVersion.date
    }
    replace_file("main_page.vue", params);
    replace_file("start/changelog.md", params);
})