describe('totalPhoneBill()', function(){
    context('given calls and sms made', function(){
        it('should returns the total of calls and sms made', function(){
            assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
        })
    })

    context('given only calls made', function(){
        it('should returns the total of calls made', function(){
            assert.equal('R5.50', totalPhoneBill('call, call'))
        })
    })

    context('given only sms made', function(){
        it('should returns the total of sms made', function(){
            assert.equal('R1.95', totalPhoneBill('sms, sms, sms'))
        })
    })

    context('without calls nor sms', function(){
        it('should throw error when there is no calls or sms given', function(){
            assert.throws(() => totalPhoneBill())
        })
    })
})