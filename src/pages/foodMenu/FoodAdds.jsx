import React from "react";
import { addsList } from "../../componentsss/MenuList";
import {MenuContent} from "./components/MenuContent";

export function FoodAdds() {
  return (   
      <MenuContent menuitemslist={addsList} />
  );
}
