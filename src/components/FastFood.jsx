import React from "react";
import { foodList } from "./MenuList";
import {RenderMenu} from "./RenderMenu";

export function FastFood() {
  return (   
      <RenderMenu menuitemslist={foodList} />
  );
}
