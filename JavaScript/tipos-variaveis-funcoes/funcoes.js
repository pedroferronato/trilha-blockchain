function cumprimentar() { return 'Oi gente!' };

function cumprimentaPessoa(nome) { console.log(`${cumprimentar()} Meu nome é ${nome}`) }

const somarSpread = (valores) => {  console.log(`Soma: ${valores.reduce( (anterior, atual) => anterior + atual, 0 )}`) }

const lista = [1, 2, 3] 

somarSpread(lista)