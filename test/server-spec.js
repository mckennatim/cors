var superagent = require('superagent')
var expect = require('expect.js')
var httpLoc = 'http://10.0.1.24:3030/'
describe('superagent:', function(){
  var newAnimal= {bird:'tweety'};
  it('POSTs a new /animal', function(done){
    superagent.post(httpLoc+'animals')
      .send(newAnimal)
      .end(function(e,res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body[2].bird.length).to.eql(6)
        expect(res.body[2].bird).to.be(newAnimal.bird)
        done()
      })    
  })
  it('PUTs update /animals/:type to putby', function(done){
    var type = 'dog';
    var upd = 'putby'
    superagent.put(httpLoc+'animal/'+type)
      .send(upd)
      .end(function(e, res){
        //console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body).to.eql(1)
        done()
      })
  })    
})
