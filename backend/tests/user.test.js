import request from 'supertest'
import express from 'express'
import UserModel from '../models/user.model.js'

const app = express()

describe('User CRUD API', () => {
  let user;

  beforeEach(async () => {
    user = await UserModel.create({ name: 'John Doe', email: 'john@example.com', age: 30 });
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Jane Doe', email: 'jane@example.com', age: 25 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Jane Doe');
  });

  it('should fetch all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe('John Doe');
  });

  it('should fetch a single user by ID', async () => {
    const res = await request(app).get(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('John Doe');
  });

  it('should update a user by ID', async () => {
    const res = await request(app)
      .put(`/api/users/${user._id}`)
      .send({ name: 'John Updated' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('John Updated');
  });

  it('should delete a user by ID', async () => {
    const res = await request(app).delete(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(204);
    const deletedUser = await User.findById(user._id);
    expect(deletedUser).toBeNull();
  });
});