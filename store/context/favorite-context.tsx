import { createContext, useState } from "react";

interface IFavoriteContext {
  ids: string[];
  addFavorite: (id: string) => void;
  deleteFavorite: (id: string) => void;
}

export const FavoriteContext = createContext<IFavoriteContext | null>(null);

function FavoriteCtxProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setIds((prev) => [...prev, id]);
  }

  function deleteFavorite(id: string) {
    setIds((currentFAvorite) =>
      currentFAvorite.filter((favorite) => favorite !== id)
    );
  }

  return (
    <FavoriteContext.Provider value={{ ids, addFavorite, deleteFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteCtxProvider;
