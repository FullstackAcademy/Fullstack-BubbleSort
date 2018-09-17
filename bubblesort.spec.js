describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  

    it('sorts an array with elements', function(){
      expect( bubbleSort([1,3,2,5,4])).toEqual( [1,2,3,4,5] );
      }
    )
});