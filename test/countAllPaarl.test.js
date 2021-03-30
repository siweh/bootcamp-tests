describe('countAllPaarl()', function(){
    context('given registration numbers for Paarl', function(){
        it('should return the number of registration numbers for Paarl', function(){
            assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
        })
    })

    context('with no registration numbers for Paarl', function(){
        it('should throw error when there is no passed argument', function(){
            assert.throw(() => countAllPaarl())
        })
    })
})