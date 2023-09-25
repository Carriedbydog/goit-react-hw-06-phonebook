const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contacts: [],
  filter: ""
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers{}
})