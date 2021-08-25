
const playerIntro={

pName:['Cristiano Ronaldo','Lionel Messi','Mason Mount','Cristian Pulisic', 'Marco Reus','Robert Lewandowski','Timo Werner','Paul Pogba','Phil Foden'],
team:['Real Madrid','Barcelona','Man City', 'Man Utd','Chelsea','Fenerbahce','Bayern Munich'],
price:[100,35,60,85,50,45,70,120],
goals:[50,120,30,90,45,68,33,56,75,19,28,5,12],
assists: [18,25,32,9,40,12,60,8,28,76]
};

function generateRandom(arr)
{
    let index=Math.floor(Math.random()*arr.length);
    return arr[index];
}

function mixedMessage(){
    let finalmixedMessage=[];
    for(let info in playerIntro)
    {   
        switch(info){
            case 'pName':
                finalmixedMessage.push(`My name is ${generateRandom(playerIntro[info])}.`);
                break;
            case 'team':
                finalmixedMessage.push(`I had signed for ${generateRandom(playerIntro[info])} `);
                break;
            case 'price':
                finalmixedMessage.push(`for a fee of $${generateRandom(playerIntro[info])} million! `);
                break;
            case 'goals':
                finalmixedMessage.push(`I have scored ${generateRandom(playerIntro[info])} goals and `);
                break;
            case 'assists':
                finalmixedMessage.push(`have provided ${generateRandom(playerIntro[info])} assists!`);
                break;
            default:
                console.log('error');
                break;
                     }
    }
    return finalmixedMessage.join('');
}

console.log(mixedMessage());