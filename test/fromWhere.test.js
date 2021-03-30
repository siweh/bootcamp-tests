describe('fromWhere()', function(){
    context('given registration number of a town', function(){
        it('should returns the town the car is from', function(){
            assert.equal('Bellville', fromWhere('CY'))
        })
    })
})