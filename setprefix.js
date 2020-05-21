const fs = require('fs');

exports.run = (client, message, args) => {
    let prefix = args[0];
    if(!prefix) {
        return message.channel.send("Please enter a new prefix!");
    }
    let configFile = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    configFile.prefix = prefix;
    client.config.prefix = prefix;
    fs.writeFile('./config.json', JSON.stringify(configFile), (err) => {
        if(err) {
            message.channel.send("There was an error while setting the prefix:" + err);
        }
    });
    return message.channel.send("Successfully changed the prefix to " + prefix);
}
