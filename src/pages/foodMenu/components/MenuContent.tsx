import React, { ReactElement } from "react";
import { useEffect } from "react";
import { MenuItem } from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/Hooks";
import { menuSelector } from "../../../modules/menu/MenuSelector";
import { fetchMenu } from "../../../modules/menu/FetchMenuThank";
import { FetchMenuType } from "../../../api/types/FetchMenuType";
import styles from "../styles.module.css";

export function MenuContent({ listName }: FetchMenuType): ReactElement {
  const dispatch = useAppDispatch();
  const menuList = useAppSelector(menuSelector);

  useEffect(() => {
    dispatch(fetchMenu({ listName: listName }));
  }, [listName]);

  return (
    <div className={styles.menuItemsContainer}>
      {menuList === undefined ? (
        <div>Loading...</div>
      ) : (
        menuList.items.map((element) => <MenuItem element={element} key={element.id} />)
      )}
    </div>
  );
}
