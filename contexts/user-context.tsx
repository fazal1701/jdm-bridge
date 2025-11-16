"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "buyer" | "seller" | "agent" | "admin";
  location?: string;
  favorites: string[];
  cart: string[];
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addToFavorites: (vehicleId: string) => void;
  removeFromFavorites: (vehicleId: string) => void;
  addToCart: (vehicleId: string) => void;
  removeFromCart: (vehicleId: string) => void;
  isFavorite: (vehicleId: string) => boolean;
  isInCart: (vehicleId: string) => boolean;
  cart: string[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock user data - John Doe
const mockUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder-avatar.jpg",
  role: "buyer",
  location: "Seattle, WA",
  favorites: ["1", "3"],
  cart: ["2"],
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("jdm_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Mock login - accept john.doe@example.com / password123
    if (
      email === "john.doe@example.com" &&
      password === "password123"
    ) {
      const loggedInUser = { ...mockUser };
      setUser(loggedInUser);
      localStorage.setItem("jdm_user", JSON.stringify(loggedInUser));
      return true;
    }
    // Also accept any email with password "password123" for demo
    if (password === "password123") {
      const loggedInUser = {
        ...mockUser,
        email,
        name: email.split("@")[0].replace(/\./g, " "),
      };
      setUser(loggedInUser);
      localStorage.setItem("jdm_user", JSON.stringify(loggedInUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jdm_user");
  };

  const addToFavorites = (vehicleId: string) => {
    if (user && !user.favorites.includes(vehicleId)) {
      const updatedUser = {
        ...user,
        favorites: [...user.favorites, vehicleId],
      };
      setUser(updatedUser);
      localStorage.setItem("jdm_user", JSON.stringify(updatedUser));
    }
  };

  const removeFromFavorites = (vehicleId: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        favorites: user.favorites.filter((id) => id !== vehicleId),
      };
      setUser(updatedUser);
      localStorage.setItem("jdm_user", JSON.stringify(updatedUser));
    }
  };

  const addToCart = (vehicleId: string) => {
    if (user && !user.cart.includes(vehicleId)) {
      const updatedUser = {
        ...user,
        cart: [...user.cart, vehicleId],
      };
      setUser(updatedUser);
      localStorage.setItem("jdm_user", JSON.stringify(updatedUser));
    }
  };

  const removeFromCart = (vehicleId: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        cart: user.cart.filter((id) => id !== vehicleId),
      };
      setUser(updatedUser);
      localStorage.setItem("jdm_user", JSON.stringify(updatedUser));
    }
  };

  const isFavorite = (vehicleId: string) => {
    return user?.favorites.includes(vehicleId) ?? false;
  };

  const isInCart = (vehicleId: string) => {
    return user?.cart.includes(vehicleId) ?? false;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        addToFavorites,
        removeFromFavorites,
        addToCart,
        removeFromCart,
        isFavorite,
        isInCart,
        cart: user?.cart ?? [],
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

