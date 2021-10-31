import * as React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { menuPartsSelector } from "../../modules/menuParts/MenuPartsSelector";
import { fetchMenuParts } from "../../modules/menuParts/FetchMenuPartsThunk";
import { MenuContent } from "./components/MenuContent";
import styles from "./styles.module.css";

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
    <div className={styles.menuContainer}>
      <div className={styles.subMenu}>
        <ul className={styles.subMenuLinks}>
          {menuTabsList.items.map((item) => (
            <li onClick={() => changeCurrentMenuTab(item.listname)} key={item.id}>
              <div className={styles.subMenuButton}>{item.partname}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.subMenuItems}>
        <MenuContent listName={currentMenuTab} />
      </div>
    </div>
  );
}
