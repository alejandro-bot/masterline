export const dominio = {
  url: "http://backend-masterline.test"
};

export function SearchPermissions(permissions, name) {
  const search = permissions.find((i) => i.name == name);

  if (typeof search === "undefined") {
    return false;
  }

  return true;
}
