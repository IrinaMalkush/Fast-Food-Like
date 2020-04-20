import React from "react";
import { addsList } from "./MenuList";
import {RenderMenu} from "./RenderMenu";

export function FoodAdds() {
  return (   
      <RenderMenu menuitemslist={addsList} />
  );
}
