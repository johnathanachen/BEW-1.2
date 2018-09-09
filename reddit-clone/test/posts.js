const Post = require('../models/post')

describe('Posts', () => {

    before((done) => {
      agent
        .post('/login')
        .send({ username: "testone", password: "password" })
        .end(function (err, res) {
          done();
        });
    });

  it('should create with valid attributes at POST /posts', (done) => {
      // Import your Post model
  // How many tours are there now?
  Tour.find(function(err, tours) {
    var tourCount = tours.count;

    var tour = { title: "post title", url: "https://www.google.com", summary: "post summary" }
    chai.request('localhost:3000')
      .post('/tours', tour)
      .end(function (err, res){

        // Check that the database has one more tour in it
        Tour.find(function(err, tours) {
          tourCount.should.be.equal(tours + 1);

          // Check that the response is a successful
          res.should.have.status(200);
        done();
      });
    });
  });

  var tour = { title: "post title", url: "https://www.google.com", summary: "post summary" }

  Tour.findOneAndRemove(tour, function() {
  Tour.find(function(err, tours) {
    var tourCount = tours.count;
    chai.request('localhost:3000')
      .post('/tours', tour)
      .end(function (err, res){
        Tour.find(function(err, tours) {
          tourCount.should.be.equal(tours + 1);
          res.should.have.status(200);
        done();
      });
    });
  });
});


  })
})
