export enum StorageConst {
  IMROBBIN_COLOR_SCHEME = 'checked_color_scheme',
}

export const getItem = (itemName: StorageConst): any | null => {
  const item = localStorage.getItem(itemName);
  return item ? JSON.parse(item) : null;
};

export const setItem = (itemName: StorageConst, value: unknown): void => {
  localStorage.setItem(itemName, JSON.stringify(value));
};

export const removeItem = (itemName: StorageConst): void => {
  localStorage.removeItem(itemName);
};
