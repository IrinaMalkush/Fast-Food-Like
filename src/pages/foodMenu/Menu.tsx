import * as React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { menuPartsSelector } from "../../modules/menuParts/MenuPartsSelector";
import { fetchMenuParts } from "../../modules/menuParts/FetchMenuPartsThunk";
import { MenuContent } from "./components/MenuContent";
import "./stylesMenu.css";

export function Menu(): React.ReactElement {
  const dispatch = useAppDispatch();
  const menuTabsList = useAppSelector(menuPartsSelector);

  useEffect(() => {
    dispatch(fetchMenuParts(null));
  }, []);

  let [currentMenuTab, setCurrentMenuTab] = useState<string>("foodList");
  const changeCurrentMenuTab = (newTab: string) => {
    setCurrentMenuTab(newTab);
  };

  return (
    <div className="menu-container">
      <div className="sub-menu">
        <ul className="sub-menu-links">
          {menuTabsList.items.map((item) => (
            <li onClick={() => changeCurrentMenuTab(item.listname)}>
              <div className="sub-menu-button">{item.partname}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sub-menu-items">
        <MenuContent listName={currentMenuTab} />
      </div>
    </div>
  );
}
