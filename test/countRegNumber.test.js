describe('countRegNumbber()', function(){
    context('given string registration numbers', function(){
        it('should return the number of registration numbers in a string', function(){
            assert.equal(3, countRegNumber('CA 42665, AA 12 RT GP, CY 523519'))
        })
    })

    context('without registration numbers', function(){
        it('should throw error when there is no given registration number', function(){
            assert.throws(() => countRegNumber())
        })
    })
})