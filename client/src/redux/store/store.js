import menuSlice from "../reducers/menuSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        menu: menuSlice,
    },
});

export default store;