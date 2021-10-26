import * as React from 'react';
import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom';
import {FastFood} from '../foodMenu/FastFood';
import {FoodAdds} from '../foodMenu/FoodAdds';
import {Drinks} from '../foodMenu/Drinks';
import {Combo} from '../foodMenu/Combo';

export function RouterSwitchMenu():React.ReactElement {
    const {path} = useRouteMatch();
    
    return  (
        <Switch>
            <Route path={`${path}/fast-food`} component={FastFood}/>
            <Route path={`${path}/adds`} component={FoodAdds}/>
            <Route path={`${path}/drinks`} component={Drinks}/>
            <Route path={`${path}/combo`} component={Combo}/>
            <Redirect from={`/menu`} to={`/menu/fast-food`}/>
        </Switch>
    )
}
