import _ from 'underscore';
import faker from 'faker';
import moment from 'moment';
import uid from 'node-uuid';

const pad = (num, size) => {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

const commandHandler = (params) => {
    if(params.length == 3 && params[0] == 'n') {
        const min = parseInt(params[1]);
        const max = parseInt(params[2]);

        return (min + Math.round(Math.random() * (max - min))).toString();
    }

    if(params.length == 3 && params[0] == 'f2') {
        const min = parseFloat(params[1]);
        const max = parseFloat(params[2]);

        return (min + Math.random() * (max - min)).toFixed(2);
    }

    if(params.length == 3 && params[0] == 'f1') {
        const min = parseFloat(params[1]);
        const max = parseFloat(params[2]);

        return (min + Math.random() * (max - min)).toFixed(1);
    }

    if(params.length == 1 && params[0] == 't') {
        const hour = pad(Math.ceil(Math.random() * 24), 2);
        const minute = pad(Math.round(Math.random() * 59), 2);
        return hour + ':' + minute;
    }

    if(params.length == 2 && params[0] == 'faker') {
        var commandString = '';
        params[1].split(' ').forEach((str, i) => {
            commandString = commandString.concat((i > 0 ? ' ' : '') + `{{${str}}}`);
        });

        return faker.fake(commandString);
    }

    if(params.length == 2 && params[0] == 'fake') {
        var commandString = params[1].replace(/\[/g, '{{')
                                    .replace(/\]/g, '}}');
        return faker.fake(commandString);
    }

    if(params.length >= 2 && params[0] == 'dateDiff') {
        const monthsDiff = parseInt(params[1]);
        const targetDate = moment().subtract(monthsDiff, 'months');
        return targetDate.format();
    }

    return false;
}

const getCommandParams = (commandString) => {
    const commandParams = commandString.replace('{{', '')
        .replace('}}', '')
        .trim()
        .split(':');

    return commandParams;
}

const treeRandomizer = (input) => {
    _.pairs(input).forEach((pair) => {
        const key = pair[0];
        const val = pair[1];

        if((typeof val === 'string') && val.includes('{{') && val.includes('}}')) {
            const params = getCommandParams(val);
            input[key] = commandHandler(params);
        }

        if(typeof val === 'object') {
            val._id = uid.v4();
            treeRandomizer(val);
        }
    });

    return input;
}


export default treeRandomizer;
