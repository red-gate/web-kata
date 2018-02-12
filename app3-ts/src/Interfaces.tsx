interface Product {
  name: string;
  description: string;
}


class SoftwareProduct implements Product {
  constructor(
    public name: string,
    public description: string
  ) { }
}

export { SoftwareProduct, Product };