const answer=require('../src/answer-generator');

describe('answer',()=>{
    it('should build answer',()=>{
        const put=answer.answers();
        
        expect(put.length).toEqual(4);
    })
})