import { createSlice, configureStore } from '@reduxjs/toolkit';

const siteSlice = createSlice({
  name: 'weather',

  initialState: {
    widgetModal: false,
    loaded: false,
    sessionData: '',
  },

  reducers: {
    callWidgetModal(state) {
      state.widgetModal = true;
    },
    killWidgetModal(state) {
      state.widgetModal = false;
    },
    loadSessionData(state, action) {
      state.sessionData = action.payload;
      state.loaded = true;
    },
    updateSessionDataByAdd(state, action) {
      state.sessionData.push(action.payload);
    },
    updateSessionDataByDelete(state, action) {
      state.sessionData = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    weather: siteSlice.reducer,
  },
});

export const stateActions = siteSlice.actions;
export default store;
