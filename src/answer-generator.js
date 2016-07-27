class AnswerGenerator{
    static answers(){
        const input=[1,2,3,4,5,6,7,8,9,0];
        const put=[];
        for(let i=0;i<4;i++ ){
            const number=parseInt(Math.random(input))*input.length;
            put.push(number);
            
        }
        return put;
    }
}

module.exports=AnswerGenerator;