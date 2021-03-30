describe('countAllFromTown()', function(){
    context('given registration numbers of a town', function(){
        it('should return the number of registration numbers for that town', function(){
            assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
        })
    })

    context('with no registration numbers for that town', function(){
        it('should throw error when there is no passed argument', function(){
            assert.throw(() => countAllFromTown())
        })
    })
})