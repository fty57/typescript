function semRetorno(...args: string[]): void {
  console.log(args.join('-'));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Otávio', 'Álisson');
pessoa.exibirNome();

export { pessoa };
