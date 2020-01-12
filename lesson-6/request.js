const request = require('request');
const util = require('util');

const TYPE_ASYNC = 1;
const TYPE_SYNC = 0;

const async = util.promisify(request);

const count = process.argv[2] || 1;
const type = Number(process.argv[3]) === TYPE_ASYNC ? TYPE_ASYNC : TYPE_SYNC;

async function get(count = 1) {
    const response = await async('http://localhost:8080');

    console.log(response.body);

    count--;

    if (count > 0) {
        return get(count);
    }

    return response;
}

if (type === TYPE_SYNC) {
    get(count)
} else {
    for(let i = 0; i < count; i++) {
        request('http://localhost:8080', (err, res, body) => {
            console.log(`request ${i} end`);
            console.log(body);
        });
    }
}
