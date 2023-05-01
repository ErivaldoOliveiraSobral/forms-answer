const { Selector } = require("testcafe");
const { links } = require('./constants')

const randomIntFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const answerAmount = 20;

fixture`Bot de respostas`

let count = 0

while (count < answerAmount) {
    const index = randomIntFromInterval(0, links.length - 1)
    count++;
    
    test(`acessa o link ${index} e clica em Enviar - Contagem ${count}`, async t => {
        await t.navigateTo(links[index]).click(Selector('span').withExactText('Enviar'));
        await t.expect(Selector('div').withExactText('A sua resposta foi registada').exists).ok();
    });
}









