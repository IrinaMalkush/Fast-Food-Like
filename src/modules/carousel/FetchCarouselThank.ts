import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '../../api/BaseUrl';

export const fetchCarousel = createAsyncThunk(
    'carousel',
    async ( _: any, ThunkAPI) => {
        try {
            const response = await fetch(
                `${baseUrl}/carouselList`,
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
