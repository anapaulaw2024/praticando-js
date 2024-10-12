alert('Olá, seja muito bem vindo(a)');
let pergunta = prompt('Me pergunte algo');
let respostas = [
    pergunta1('Qual seu nome?'),
    pergunta2('Qual sua idade?'),
    pergunta3('Qual seu livro favorito?')
];
let perguntaDefault = ('')

if(pergunta === pergunta1){
    print= ('Segredoo')
};
elif(pergunta === pergunta2)
{
print= ('Talvez 24')
};
elif(pergunta === pergunta3)
{
    print= ('Difícil essa, mas provavelmente Morangos Mofados')
};
elif(pergunta === perguntaDefault)
{
    print = ('Pergunte algo...Não me faz perder tempo...')
}
elif(pergunta !== respostas)
{
alert('O usuário não se encontra nesse presente momento, tente novamente mais tarde, byee')
}

