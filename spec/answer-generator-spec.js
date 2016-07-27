const answer = require('../src/answer-generator');

describe('answerss', ()=> {
    it('should build answer', ()=> {

        const result = answer.answers();

        expect(result.length).toEqual(4);
       

    })
})