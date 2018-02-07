interface Product {
    name: string
    description: string
  }
  
  interface ProductCollection {
    products: Product[]
  }
  
  class SoftwareProductCollection implements ProductCollection {
    constructor(
      public products: Product[]
    ){}
  }
  
  class SoftwareProduct implements Product {
    constructor(
      public name: string,
      public description: string
    ){}
  }
  
export { SoftwareProduct, SoftwareProductCollection, ProductCollection, Product };