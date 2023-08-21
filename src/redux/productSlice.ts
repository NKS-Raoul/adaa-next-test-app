import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/getProducts",
    async (thunkApi) => {
        const response = await fetch(
            "https://dummyjson.com/products?limit=" + initialState.limit + "&skip=" + initialState.skip
        ).then(res => res.json());
        console.log("Raoul is here !!!")
        return response.products;
    }
);

const initialState = {
    entities: [],
    loading: false,
    limit: 5,
    skip: 0,
} as any;

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setSkip: (state, action) => {
            state.skip = action.payload;
        },
        setEntities: (state, action) => {
            console.log("Renew datas !!!")
            state.entities = [...action.payload];
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.entities = [...action.payload];
        });

        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        });
    },
});

export const { setLimit, setSkip, setEntities, setLoading } = productSlice.actions;

export default productSlice.reducer;