describe('isFromBellville()', function(){
    context('with registration numbers from Bellville', function(){
        it('should return true', function(){
            assert.equal(true, isFromBellville('CY99'))
        })
    })

    context('with registration numbers not from Bellville', function(){
        it('should return false', function(){
            assert.equal(false, isFromBellville('DN99'))
        })
    })

    context('without passed registration numbers', function(){
        it('should throw error when there is no registration number', function(){
            assert.throws(() => isFromBellville())
        })
    })
})