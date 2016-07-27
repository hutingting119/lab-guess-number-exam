const compare=require('../src/compare-number');
const answer=require('../src/answer-generator');
const game=require('../src/game');
const returnPut=require('../src/returnPut');

describe('game',()=>{
    const answer='1234';
        it("should return descire",()=>{
            [
                {
                    number: '1234',
                    count:1,
                    expectResult: 'Congratulations!'

                },
                {
                    number: '4321',
                    count:1,
                    expectResult: `0A4B
Please input your number(1)`
                },
                {
                    number: '5678',
                    count:0,
                    expectResult: 'Game Over'
                }
            ].forEach(item=> {
                expect(returnPut.Put(answer,item.number,item.count)).toEqual(item.expectResult);
            })
    })
})