import React from "react";
import { drinksList } from "./MenuList";
import {RenderMenu} from "./RenderMenu";

export function Drinks() {
  return (   
      <RenderMenu menuitemslist={drinksList} />
  );
}
