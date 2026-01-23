import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// TypeScript interface dyal Property
interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  type: string; // "Vente" | "Location"
  rooms: number;
}

interface PropertiesState {
  list: Property[];
  loading: boolean;
  error: string | null;
}

const initialState: PropertiesState = {
  list: [],
  loading: false,
  error: null,
};

// Async thunk bach njibo les propriétés mn db.json
export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const res = await axios.get("http://localhost:5000/properties");
    return res.data;
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action: PayloadAction<Property[]>) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching properties";
      });
  },
});

export default propertiesSlice.reducer;
