import mongoose from 'mongoose'

beforeAll(async () => {
    await mongoose.connect(process.env.DEV_DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
});
  

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});
  
afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany();
    }
});