export class Product {
  // chamando public ou pritave dentro do constructor já atribui eles a uma variável com o mesmo nome
  // id vai ser id desc é desc ...
  constructor(
    public id: string,
    public title: string,
    public desc: string,
    public price: number,
  ) {}
}
