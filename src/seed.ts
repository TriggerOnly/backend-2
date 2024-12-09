import { DataSource } from 'typeorm';
import { User } from './User/User.module';
import { faker } from '@faker-js/faker';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 4000,
  username: 'Thigger',
  password: 'TheTrigger1911',
  database: 'db',
  entities: [User],
  synchronize: false,
});

async function seed() {
  await dataSource.initialize();
  const userRepository = dataSource.getRepository(User);

  const users = Array.from({ length: 1_000_000 }, () => {
    return userRepository.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.number.int({ min: 18, max: 80 }),
      gender: faker.helpers.arrayElement(['male', 'female']),
      problems: faker.datatype.boolean(),
    });
  });

  await userRepository.save(users);
  console.log('Seeding complete!');
  await dataSource.destroy();
}

seed();
