export type Product = {
  id: string; 
  user: string | null; 
  img_url: string; 
  name: string; 
  price: string;
}

export type Item = {
  id: string;
  img_url: string;
  name: string;
  price: string;
  amount: string;
}

export type ContextProps = {
  total: number,
  items: Array<Item>,
  isNavigating: boolean,
  
  getItems: () => void,
  navigateTo: () => void,
  noNavigateTo: () => void,
  calculateTotal: () => void,
  deleteItem: (id: string) => void
  getHash: (section: string) => void,
  addProduct: (product: Item) => void
}