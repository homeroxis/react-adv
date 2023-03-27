import { CSSProperties } from 'react';
import { Props as productButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';

// export interface ProductCardProps {
//     product: Product;
//     children?: ReactElement | ReactElement[]
// }

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  // Title: ({ title }: { title?: string }) => JSX.Element,
  Title: (Props: { title?: string; className?: string; style?: CSSProperties }) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: productButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: ( value: number ) => void;
  reset: () => void;
}
