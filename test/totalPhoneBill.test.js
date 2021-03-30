describe('totalPhoneBill()', function(){
    context('given calls and sms made', function(){
        it('should returns the total of calls and sms made', function(){
            assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
        })
    })
})