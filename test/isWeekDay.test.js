describe('isWeekDay()', function(){
    context('when given a week day', function(){
        it('should return true', function(){
            assert.equal(true, isWeekDay('Tuesday'))
        })
    })

    context('when given a day which is not a week day', function(){
        it('should return false', function(){
            assert.equal(false, isWeekDay('Sunday'))
        })
    })
    context('when given a false week day', function(){
        it('should throw error when given a non-weekday value', function(){
            assert.throws(() => isWeekDay('Siweh'))
        })
    })
})