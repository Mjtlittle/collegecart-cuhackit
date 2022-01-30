export const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

const apiFetch = async (route, options) => {
  return await fetch(`${endpoint}${route}`, {
    credentials: "include",
    ...options,
  }).then((res) => res.json());
};

export const createListing = async (data) =>
  apiFetch("/listing/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const getAllListings = async (data) =>
  apiFetch("/listing/all", {
    method: "GET",
  });

export const getUserMe = async () => apiFetch("/users/me", { method: "GET" });
