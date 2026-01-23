"use client"; // important! Redux Provider is client-side

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
