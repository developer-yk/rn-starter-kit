// Step 1: Import redux tool kit
import { combineReducers ,configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
// Step 2: Import All Reduces
import User from "./reducers/users";

// Step 9: Import Logger
import {logger} from 'redux-logger';

// Step 4 : Import async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Step 6: Import redux-persist
import {persistReducer,persistStore} from 'redux-persist';


// Step 3: Combine All reduces
const rootReducer=combineReducers({
     user:User,
});

// Step 5 configuration of store
const configuration={
    key:'root',
    storage:AsyncStorage,
    version:1
}

// Step 7: Persisting Reducers
const persistedReducer=persistReducer(configuration,rootReducer);

// Step 8: Configure The Store
const store=configureStore({
    reducer:persistedReducer,
    middleware:getDefaultMiddleware=>{
        return getDefaultMiddleware({serializableCheck:false}).concat(logger);
    }
});

export default store;

export const persistor=persistStore(store);