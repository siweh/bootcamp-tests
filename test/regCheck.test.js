describe('regCheck()', function(){
    context('given a registration that corresponds with the correct registration plate', function(){
        it('should return true', function(){
            assert.equal(true, regCheck('DV 23 NB gp', 'gp'))
        })
    })

    context('given a registration that does not corresponds with the correct registration plate', function(){
        it('should return false', function(){
            assert.equal(false, regCheck('DV 23 LP GP', 'MP'))
        })
    })

    context('without registration number and registration plate', function(){
        it('should throw error when there is no passed string', function(){
            assert.throws(() => regCheck())
        })
    })
})