import { useState } from "react";

export default function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] =
    useState(() => {
      try {
        const item =
          localStorage.getItem(
            key
          );

        if (
          item === null ||
          item === "undefined"
        ) {
          return initialValue;
        }

        return JSON.parse(item);
      } catch {
        return initialValue;
      }
    });

  const setStoredValue =
    (newValue) => {
      const valueToStore =
        typeof newValue ===
        "function"
          ? newValue(value)
          : newValue;

      setValue(
        valueToStore
      );

      localStorage.setItem(
        key,
        JSON.stringify(
          valueToStore
        )
      );
    };

  return [
    value,
    setStoredValue,
  ];
}