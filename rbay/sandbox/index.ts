import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    // await client.del('car');

    // await client.hSet('car', {
    //     color: 'red',
    //     year: 1950
    // });

    // const car = await client.hGetAll('car');
    // // const car = await client.hGetAll('notExistingKey');

    // if (Object.keys(car).length === 0) {
    //     console.log('Car not found, respond with 404');
    //     return;
    // }

    // console.log(car);

    await client.hSet('car1', {
        color: 'red',
        year: 1950
    });

    await client.hSet('car2', {
        color: 'green',
        year: 1955
    });

    await client.hSet('car3', {
        color: 'blue',
        year: 1960
    });

    const commands = [1, 2, 3].map(id => {
        return client.hGetAll(`car${id}`);
    });

    const results = await Promise.all(commands);

    console.log(results);
};

run();
