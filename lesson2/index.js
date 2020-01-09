/**
 * Created by PhpStorm on 09.01.2020.
 * Author: Shabalin Pavel
 * Email: aisamiery@gmail.com
 */

var fn1 = () => {
    console.log('fn1');
    return Promise.resolve(1)
};

var fn2 = () => new Promise(resolve => {
    console.log('fn2');
    setTimeout(() => resolve(2), 1000)
});

function promiseReduce(asyncFunctions, reduce, initialValue) {
    /*
    * Реализация
    */

    let memo = initialValue;

    async function startCallback(callback) {
        if (callback) {
            let value = await callback();
            memo = reduce(memo, value);

            return startCallback(asyncFunctions.shift());
        } else {
            return memo;
        }
    }

    return Promise.resolve(startCallback(asyncFunctions.shift()));
}

promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log('reduce');
        return memo * value
    },
    1
)
    .then(console.log);
