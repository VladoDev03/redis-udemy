import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    // await client.del('car');

    await client.hSet('car', {
        color: 'red',
        year: 1950
    });

    const car = await client.hGetAll('car');
    // const car = await client.hGetAll('notExistingKey');

    if (Object.keys(car).length === 0) {
        console.log('Car not found, respond with 404');
        return;
    }

    console.log(car);
};

run();
