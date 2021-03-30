describe('transportFee()', function(){
    context('given a working shift', function(){
        it('should returns the right price based on the shift you are working', function(){
            assert.equal('free', transportFee('nightshift'))
        })
    })

})