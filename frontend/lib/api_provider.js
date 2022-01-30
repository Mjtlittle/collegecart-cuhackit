import { useState, createContext, useEffect } from "react";
import { getAllListings, getUserMe } from "./api";
import { useRouter } from "next/router";

export const APIContext = createContext({});

export const APIProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);

  const refreshListings = async () => {
    const listing_data = await getAllListings();
    setListings(listing_data);
  };

  const router = useRouter();
  useEffect(async () => {
    const res = await getUserMe();

    // keep people from accessing the further pages
    if (res.status === 401) {
      router.replace("/");
      return;
    }

    setUser(res);
    await refreshListings();
  }, []);

  const items = { user, setUser, listings, refreshListings };

  return <APIContext.Provider value={items}>{children}</APIContext.Provider>;
};
