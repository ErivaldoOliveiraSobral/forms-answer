const { Selector } = require("testcafe");

const randomIntFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const answerAmount = 2;
const links = [
    'https://docs.google.com/forms/d/e/1FAIpQLSfb5kvk1NwKAVPlXDQMkNr8JUB1QvIL22p3MqmN8pxev2XS4w/viewform?usp=pp_url&entry.1446850708=Divorciado&entry.510349640=Feminino&entry.526458741=Entre+25+e+30+anos&entry.199606220=3+a+5+pessoas&entry.1781971279=Vila+Nova+Manchester&entry.225322375=R$+2000,00+a+R$+3000,00&entry.2114588769=Entre+3+e+5+vezes+por+m%C3%AAs&entry.1121028172=Sem+lactose&entry.1954384170=R$+50,00+a+R$100,00&entry.2094003389=Bolo&entry.939647203=Morango&entry.1688632088=Doces+e+bolos&entry.1931695204=Sim&entry.668764101=4&entry.510438686=4&entry.873538007=4&entry.148840665=2&entry.1134690430=Sim&entry.725695063=Sim,+com+pouca+frequ%C3%AAncia&entry.413721833=Sim&entry.1064381666=Sim,+com+pouca+frequ%C3%AAncia&entry.1850763297=N%C3%A3o&entry.1679513297=Outros&entry.676903208=Bom&entry.1821941048=4&entry.373625497=4&entry.816555968=4&entry.1429377447=3&entry.800239900=2&entry.2063168945=Localiza%C3%A7%C3%A3o&entry.12182032=4&entry.313935487=5',
    'https://docs.google.com/forms/d/e/1FAIpQLSfb5kvk1NwKAVPlXDQMkNr8JUB1QvIL22p3MqmN8pxev2XS4w/viewform?usp=pp_url&entry.1446850708=Solteiro&entry.510349640=Feminino&entry.526458741=Entre+30+e+40+anos&entry.199606220=3+a+5+pessoas&entry.1781971279=Ch%C3%A1cara+Santo+Ant%C3%B4nio&entry.225322375=R$+2000,00+a+R$+3000,00&entry.2114588769=Poucas+vezes+por+m%C3%AAs&entry.959509100=Acho+enjoativo&entry.1121028172=Algo+pequeno+e+menos+doce&entry.1954384170=At%C3%A9+R$+50,00&entry.2094003389=Pudim&entry.939647203=Chocolate&entry.939647203=Morango&entry.1688632088=Todos&entry.1931695204=Sim&entry.668764101=4&entry.510438686=3&entry.873538007=2&entry.148840665=2&entry.1134690430=Sim&entry.725695063=Sim,+com+pouca+frequ%C3%AAncia&entry.413721833=Sim&entry.1064381666=N%C3%A3o,+nunca+fiz&entry.1850763297=Sim&entry.129793038=N%C3%A3o,+nunca+fiz&entry.1679513297=A%C3%A7a%C3%AD&entry.1679513297=Outros&entry.676903208=%C3%93timo&entry.1821941048=5&entry.373625497=3&entry.816555968=4&entry.1429377447=3&entry.800239900=3&entry.2063168945=Pre%C3%A7o&entry.2063168945=Localiza%C3%A7%C3%A3o&entry.12182032=5&entry.313935487=5',
    'https://docs.google.com/forms/d/e/1FAIpQLSfb5kvk1NwKAVPlXDQMkNr8JUB1QvIL22p3MqmN8pxev2XS4w/viewform?usp=pp_url&entry.1446850708=Solteiro&entry.510349640=Masculino&entry.526458741=Entre+25+e+30+anos&entry.199606220=1+a+2+pessoas&entry.1781971279=Vila+Nova+Manchester&entry.225322375=R$+1000,00+a+R$2000,00&entry.2114588769=Entre+3+e+5+vezes+por+m%C3%AAs&entry.959509100=Outros&entry.1121028172=Mais+amargos&entry.1954384170=R$+50,00+a+R$100,00&entry.2094003389=Bolo&entry.939647203=Chocolate&entry.939647203=Baunilha&entry.1688632088=Doces+e+bolos&entry.1931695204=Sim&entry.668764101=4&entry.510438686=3&entry.873538007=2&entry.148840665=4&entry.1134690430=Sim&entry.725695063=Sim,+com+pouca+frequ%C3%AAncia&entry.413721833=Sim&entry.1064381666=Sim,+com+pouca+frequ%C3%AAncia&entry.1850763297=N%C3%A3o&entry.129793038=N%C3%A3o,+nunca+fiz&entry.1679513297=A%C3%A7a%C3%AD&entry.676903208=Bom&entry.1821941048=4&entry.373625497=3&entry.816555968=3&entry.1429377447=4&entry.800239900=3&entry.2063168945=Pre%C3%A7o&entry.2063168945=Conforto&entry.2063168945=Localiza%C3%A7%C3%A3o&entry.12182032=4&entry.313935487=4'
];

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
