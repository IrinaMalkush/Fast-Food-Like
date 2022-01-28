import React, { ReactElement } from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { menuPartsSelector } from "../../modules/menuParts/MenuPartsSelector";
import { fetchMenuParts } from "../../modules/menuParts/FetchMenuPartsThunk";
import { MenuContent } from "./components/MenuContent";
import styles from "./styles.module.css";
import { Loader } from "../../ui/loader/Loader";

export function Menu(): ReactElement {
  const dispatch = useAppDispatch();
  const menuTabsList = useAppSelector(menuPartsSelector);

  useEffect(() => {
    dispatch(fetchMenuParts(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let [currentMenuTab, setCurrentMenuTab] = useState<string>(menuTabsList.items[0]?.id);
  const changeCurrentMenuTab = (newTab: string) => {
    setCurrentMenuTab(newTab);
  };

  useEffect(() => {
    changeCurrentMenuTab(menuTabsList.items[0]?.id);
  }, [menuTabsList]);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.subMenu}>
        <ul className={styles.subMenuLinks}>
          {menuTabsList && menuTabsList.items ? (
            menuTabsList.items.map((item) => (
              <li onClick={() => changeCurrentMenuTab(item.id)} key={item.id}>
                <div className={styles.subMenuButton}>{item.partname.slice(0, 10)}</div>
              </li>
            ))
          ) : (
            <Loader />
          )}
        </ul>
      </div>
      <div className={styles.subMenuItems}>
        {currentMenuTab ? <MenuContent categoryId={currentMenuTab} /> : <Loader />}
      </div>
    </div>
  );
}
