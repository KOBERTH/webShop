
export type ProductCardProps = {
  id: string;
  img: string;
  name: string;
  price: string;
  features: Array<string>
  brand: string 
  category: string
}

export type CarouselProps = {
  elements: Array<ReactNode>;
}

export type InputProps = {
  name?: string,
  title?: string,
  placeholder?: string
  type?: HTMLInputTypeAttribute,
}

export type TextAreaProps = {
  name?: string,
  title?: string,
}

export type DesktopNavProps = {
  email: string,
  handleLogout: () => void
  openCart: () => void, 
  openSearch: () => void
}

export type MobileNavProps = {
  categories: boolean,
  profile: boolean,
  email: string,
  handleLogout: () => void, 
  handleCategories: () => void, 
  handleProfile: () => void, 
  openCart: () => void, 
  openSearch: () => void
}

export type SectionProps = {
  id: number;
  img_url: string;
  name: string;
  price: string;
  discount: string;
  description: Array<string>
  category: string;
  brand: string
}

type Inputs = {
  name: string
  email: string
  celular: string
  cedula: string
  provincia: string
  canton: string
  distrito: string
  address: string
}