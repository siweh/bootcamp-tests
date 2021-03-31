describe('transportFee()', function(){
    context('given a working shift', function(){
        it('should returns the right price based on the shift you are working', function(){
            assert.equal('free', transportFee('nightshift'))
        })
    })

    context('given a working shift', function(){
        it('should throw error when the working shift is not a string', function(){
            assert.throws(() => transportFee(20))
        })
    })

    context('without a working shift', function(){
        it('should throw error when the working shift is not given', function(){
            assert.throws(() => transportFee())
        })
    })
})