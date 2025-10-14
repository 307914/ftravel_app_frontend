import { createContext, useContext, useReducer } from "react";
import { DateReducer, dateReducer } from "../reducer";

export const intialState = {
    checkInDate: null,
    checkOutDate: null,
    ismodalopen: false,
    destination: "",
    date: null,
    issearchopen: true
}
export const dateContext = createContext(intialState);


const DateContetProvider = ({ children }) => {
    const [state, datedispatch] = useReducer(DateReducer, intialState);
    const { issearchopen, checkInDate, date, destination, checkOutDate, ismodalopen } = state;
    return <dateContext.Provider value={{ issearchopen, date, destination, checkInDate, checkOutDate, ismodalopen, datedispatch }}>{children}</dateContext.Provider>
}

const useDate = () => useContext(dateContext);


export { DateContetProvider, useDate };