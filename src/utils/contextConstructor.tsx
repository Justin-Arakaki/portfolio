import {
  Context,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from 'react';

export type SetValue<T> = Dispatch<SetStateAction<T>>;

export interface Children {
  children: ReactNode;
}

export function createUseContext<T>(
  MyContext: Context<T>,
  defaultVal: NonNullable<T>
) {
  return (): NonNullable<T> => {
    const context = useContext(MyContext);
    if (!context) return defaultVal;
    return context;
  };
}

export function createUseContextUpdate<T>(MyContextUpdate: Context<T>) {
  const name = Object.keys(MyContextUpdate)[3];
  return (): unknown => {
    const context = useContext(MyContextUpdate);
    if (!context) throw new Error(`${name} is null`);
    return context;
  };
}
