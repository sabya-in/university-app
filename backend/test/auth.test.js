const chai = require('chai')
const { it, describe, afterEach, after, before, beforeEach } = require('mocha');
const assert = chai.assert;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Application imports
const server = require("../app");

const context = {
  app: null,
}

describe("API: auth and user route test", async function () {
  before(async function () {
    chai.use(require("chai-http"));
    context.app = await server;
  });

  after(async function () {
    context.app.close();
  });

  describe("POST:/users/register", async function () {
    it("should return a token for a successful registration", async function () {
      const response = await chai.request(context.app).post('/users/register').send({
        name: "user",
        username: "username",
        password: "password",
        email: "user@example.com"
      });
      assert.equal(response.status, 200);
      assert.equal(response.body.success, true);

      describe("POST:/users/login", async function () {

        it("should log you in when using correct credentials", async function () {
          const response = await chai.request(context.app).post('/users/login').send({
            password: "password",
            username: "username"
          });
          var token = response.body.token;
          console.log(token)
          assert.equal(response.status, 200);
          assert.exists(response.body.token);
          
          describe("POST:/users/profile", async function () {
            it("should log you in with correct token", async function () {
              console.log(token)
              const response = await chai.request(context.app).get('/users/profile').set("Authorization", token).send({
                password: "xyz123",
                username: "username"
              });
              assert.equal(response.status, 200);
              assert.exists(response.body.user.username, "username");
            });
          });

        });

        it("should not log you in with incorrect credentials", async function () {
          const response = await chai.request(context.app).post('/users/login').send({
            password: "xyz123",
            username: "username"
          });
          assert.equal(response.status, 200);
          assert.equal(response.body.success, false);
        });

      });

    });
  });
});