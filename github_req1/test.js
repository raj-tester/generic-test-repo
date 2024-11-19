const Ajv = require("ajv")
const ajv = new Ajv()
var chai = require("chai");
var chaihttp = require("chai-http");
var expect = require("chai").expect;
//var dataSchema1  = require('../../jsonSchema.js');
//var dataSchema2  = require('../../schemaRepo.js');
//var postData  = require('../../apiTestData.js');

chai.use(chaihttp);
chai.use(require('chai-json-schema'));
chai.use(
  require('chai-json-schema-ajv').create({
    verbose: true
  }))
var baseURL  = "https://petstore.swagger.io/v2";

  let pet_id =0;
  let i = 10;
  describe("API tests for pet management ", function(){
     it("GET Repo", function(done){
       chai.request("https://api.github.com/")
       .post("user/repos")
       .set("Authorization", "Bearer " + "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")
       .send({
         "name": "code repo5",
         "description": "test 5"
       })
       .end(function(err, res){
         console.log(res.statusCode)
         if(err){
          done(err);
          }
      done();
  })
  })
   
  });