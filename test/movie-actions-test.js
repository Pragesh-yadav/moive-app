var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();
chai.use(chaiHttp);


describe("MOVIE FLOW UNIT TEST", function(){
    
        var movie = {
            
            "name": "a",
      "img": "c://d/v",
      "summery": "A Movie test"
        }
        it("Should add New moive in DB", (done) => {
                chai.request('http://localhost:3000/movie')
                    .post("/addNewMovie")
                    .send(movie)
                    .end((err, res) => {
                        res.should.have.status(201);
                        
                    })
            
            done()
        })
    })

    describe ("GET ALL movies", function(){
        it("should get all movies", (done) => {
           
                chai.request('http://localhost:3000/movie')
                    .get("/getmovielist")
                    .end((err, res) => {
                        res.should.have.status(200);
                        console.log("Response Body:", res.body);
                    })
            done()
        })
    })
    