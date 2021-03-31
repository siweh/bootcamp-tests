describe('fromWhere()', function(){
    context('given registration number of a Western Cape', function(){
        it('should returns the town the car is from', function(){
            assert.equal('Bellville', fromWhere('CY'))
        })
    })

    context('given registration number of a town', function(){
        it('should returns the town the car is from', function(){
            assert.equal('Some other place!', fromWhere('GP'))
        })
    })

    context('without registration number', function(){
        it('should throw error when there is no registration number given', function(){
            assert.throws(() => fromWhere())
        })
    })
})