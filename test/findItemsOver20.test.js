describe('findItemsOver20()', function(){
    context('given list of items and one of them is greater 20', function(){
        it('should return a list with one item greater than 20', function(){
            assert.equal(1, findItemsOver20([
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ]).length)
        })
    })

    context('given list of items and none of them is greater than 20', function(){
        it('should return an empty list', function(){
            assert.equal(0, findItemsOver([
                {name : 'apples', qty : 3},
            ]).length)
        })
    })
})