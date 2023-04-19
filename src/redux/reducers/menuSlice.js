import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    isLoading : true,
    menu: [],
    noodleMenu : [],
    saladMenu: [],
    beveragesMenu: [],
    otherMenu: [],
    error:'',
}

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async ()=> {
    const res = await axios.get('http://localhost:3000/api/v1/menus');
    console.log(res.data);
    return res.data;
});

const menuSlice = createSlice({
    name:'menu',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.pending, state => {
            state.isLoading = true;
        });

        builder.addCase(fetchMenu.fulfilled, (state,action) => {
            state.isLoading = false;
            state.menu = action.payload.data.menus; // extract the menus array
            state.noodleMenu = state.menu.filter((menu)=>menu.category.includes('noodle'));
            state.saladMenu = state.menu.filter((menu)=>menu.category.includes('salad'));
            state.beveragesMenu = state.menu.filter((menu)=>menu.category.includes('beverages'));
            state.otherMenu = state.menu.filter((menu)=>menu.category.includes('other'));
            state.error = '';
        });

        builder.addCase(fetchMenu.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default menuSlice.reducer;