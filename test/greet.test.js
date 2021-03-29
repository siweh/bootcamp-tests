describe('greet()', function(){
    context('given a string argument', function(){
        it('should greet correctly', function(){
            assert.equal('Hello, Siweh', greet('Siweh'))
        })
    })

    context('without string argument', function(){
        it('should throw error when a name is not provided', function(){
            assert.throws(() => greet());
        })
    })

    context('when a string is not a name', function(){
        it('should throw error when a name is not a string', function(){
            assert.throws(() => greet(7))
        })
    })
})