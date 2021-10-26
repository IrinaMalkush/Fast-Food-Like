import React from "react";
import { comboList } from "../../componentsss/MenuList";
import {MenuContent} from "./components/MenuContent";

export function Combo() {
  return (   
      <MenuContent menuitemslist={comboList} />
  );
}
