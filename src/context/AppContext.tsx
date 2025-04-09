import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-toastify";

type AppContextType = {
  navigate: (path: string) => void;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  products: any[];
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  showuserLogin: boolean;
  setShowUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
  currency: string;
  cartItems: { [key: string]: number };
  setCartItems: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  addToCart: (itemId: string) => void;
  updateToCart: (itemId: string, quantity: number) => void;
  removeCart: (itemId: string) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType>({
  navigate: () => {},
  user: null,
  setUser: () => {},
  products: [],
  setProducts: () => {},
  isSeller: false,
  setIsSeller: () => {},
  showuserLogin: false,
  setShowUserLogin: () => {},
  currency: "",
  cartItems: {},
  setCartItems: () => {},
  addToCart: () => {},
  updateToCart: () => {},
  removeCart: () => {},
  searchQuery: "", // ✅ FIXED here
  setSearchQuery: () => {},
});

const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;
  const [user, setUser] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [showuserLogin, setShowUserLogin] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [searchQuery, setSearchQuery] = useState<string>(""); // ✅ FIXED here

  const fetchProduct = () => {
    setProducts(dummyProducts);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart = (itemId: string) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    toast.success("added to cart");
    setCartItems(cartData);
  };

  const updateToCart = (itemId: string, quantity: number) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("cart is updated");
  };

  const removeCart = (itemId: string) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
    toast.success("cart item is deleted");
  };

  const value: AppContextType = {
    navigate,
    user,
    setUser,
    products,
    setProducts,
    isSeller,
    setIsSeller,
    showuserLogin,
    setShowUserLogin,
    currency,
    cartItems,
    setCartItems,
    addToCart,
    updateToCart,
    removeCart,
    searchQuery,
    setSearchQuery,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
