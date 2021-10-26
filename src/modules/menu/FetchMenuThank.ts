import {createAsyncThunk} from '@reduxjs/toolkit';
import {FetchMenuType} from '../../api/types/FetchMenuType';
import {baseUrl} from '../../api/BaseUrl';

export const fetchMenu = createAsyncThunk(
    'menu',
    async ({listName}: FetchMenuType, ThunkAPI) => {
        console.log("fetchMenu: ", listName);
        try {
            const response = await fetch(
                `${baseUrl}/${listName}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }
            );
            let data = await response.json();

            if(response.status === 200) {
                console.log(data);
                return {...data};
            } else {
                console.log('data: ', data);
                return ThunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error: ', e.response.data);
            return ThunkAPI.rejectWithValue(e.response.data);
        }
    }
)
