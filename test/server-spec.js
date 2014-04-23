var superagent = require('superagent')
var expect = require('expect.js')
var _ = require('underscore')

var httpLoc = 'http://10.0.1.24:3030/'
describe('superagent:', function(){
  var newAnimal= {type:'bird', name:'tweety'};
  it('POSTs a new /animal', function(done){
    superagent.post(httpLoc+'animals')
      .send(newAnimal)
      .end(function(e,res){
        console.log('there are '+_.where(res.body, {type:'bird'}).length+' of '+JSON.stringify(newAnimal));
        var idx =res.body.indexOf(_.where(res.body, {type:'bird'})[0]);
        console.log('the first is at index:'+idx)
        expect(e).to.eql(null)
        expect(res.body[idx].name.length).to.eql(6)
        expect(res.body[idx].name).to.be(newAnimal.name)
        done()
      })    
  })
  it('PUTs update /animals/(of):type(dog) to name:putby', function(done){
    var type = 'dog';
    var newname = {name:'putby'};
    superagent.put(httpLoc+'animals/'+type)
      .send(newname)
      .end(function(e, res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.name).to.eql(newname.name)
        done()
      })
  })    
})
