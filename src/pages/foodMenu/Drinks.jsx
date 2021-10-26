import React from "react";
import { drinksList } from "../../componentsss/MenuList";
import {MenuContent} from "./components/MenuContent";

export function Drinks() {
  return (   
      <MenuContent menuitemslist={drinksList} />
  );
}
