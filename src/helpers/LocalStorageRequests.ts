import { ICart, ICartProps, ITypeItem } from "../api/types/AddGoodsType";

interface IAddCartProps {
  productId: string;
  name: string;
  price: number;
  type: string;
}

export interface IChangeProps {
  productId: string;
  type: string;
  add: boolean;
}

export const GetFromCart = async () => {
  const cart = await localStorage.getItem("cart");
  if (cart !== undefined && cart !== null && cart !== "undefined") {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const setToCart = ({ cart }: ICartProps) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const AddCart = async ({ productId, name, type, price }: IAddCartProps) => {
  let cartData: ICart[] = await GetFromCart();

  if (cartData) {
    const found = cartData.find((value) => value.productId === productId);
    if (found) {
      const valueItem = found.value.find((value) => value.type == type);
      if (valueItem) {
        valueItem.amount += 1;
      } else {
        found.value.push({ type: type, price: price, amount: 1 } as ITypeItem);
      }
    } else {
      cartData.push({
        productId: productId,
        name: name,
        value: [{ type: type, price: price, amount: 1 }],
      });
    }
    setToCart({ cart: cartData });
  } else {
    setToCart({
      cart: [
        { productId: productId, name: name, value: [{ type: type, price: price, amount: 1 }] },
      ],
    });
  }
};

export const ChangeAmount = async ({ productId, type, add }: IChangeProps) => {
  let cartData: ICart[] = await GetFromCart();

  const found = cartData.find((value) => value.productId === productId);
  const valueItem = found?.value.find((value) => value.type == type);
  if (valueItem && add) {
    valueItem.amount += 1;
  } else if (valueItem && !add) {
    valueItem.amount -= 1;
  } else return;

  setToCart({ cart: cartData });
};

export const ClearCart = () => {
  localStorage.removeItem("cart");
};
