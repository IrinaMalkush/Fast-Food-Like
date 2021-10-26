import React from "react";
import { foodList } from "../../componentsss/MenuList";
import {MenuContent} from "./components/MenuContent";

export function FastFood() {
  return (   
      <MenuContent menuitemslist={foodList} />
  );
}
