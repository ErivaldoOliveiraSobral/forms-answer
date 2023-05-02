const { Selector } = require("testcafe");
const { links } = require('./constants')

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const delay = minutes => new Promise(resolve => setTimeout(() => resolve(minutes), minutes * 60000));

const answerAmount = 5;

fixture`Bot de respostas`

let count = 0

while (count < answerAmount) {
    const index = randomIntFromInterval(0, links.length - 1)
    const waiting = randomIntFromInterval(1, 20);
    count++;
    
    test(`aguarda ${waiting} minutos, acessa o link ${index} e clica em Enviar - Contagem ${count}`, async t => {
        await delay(waiting);
        await t.navigateTo(links[index]).click(Selector('span').withExactText('Enviar'));
        await t.expect(Selector('div').withExactText('A sua resposta foi registada').exists).ok();
    });
}









