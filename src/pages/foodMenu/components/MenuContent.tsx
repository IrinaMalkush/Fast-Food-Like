import * as React from "react";
import { useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/Hooks";
import { menuSelector } from "../../../modules/menu/MenuSelector";
import { fetchMenu } from "../../../modules/menu/FetchMenuThank";
import { FetchMenuType } from "../../../api/types/FetchMenuType";
import { FullScreenImage } from "./FullScreenImage";

export function MenuContent({ listName }: FetchMenuType): React.ReactElement {
  const dispatch = useAppDispatch();
  const menuList = useAppSelector(menuSelector);

  const match = useRouteMatch();

  useEffect(() => {
    dispatch(fetchMenu({ listName: listName }));
  }, [listName]);

  return (
    <div className="menu-items-container">
      {menuList === undefined ? (
        <div>Loading...</div>
      ) : (
        menuList.items.map((element) => (
          <MenuItem element={element} url={match.url} key={element.id} />
        ))
      )}

      <Switch>
        <Route path={`${match.path}/:imageId`}>
          <FullScreenImage backPath={match.path} />
        </Route>
      </Switch>
    </div>
  );
}
