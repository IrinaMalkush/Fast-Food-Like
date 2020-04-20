import React from "react";
import { comboList } from "./MenuList";
import {RenderMenu} from "./RenderMenu";

export function Combo() {
  return (   
      <RenderMenu menuitemslist={comboList} />
  );
}
