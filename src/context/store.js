import React, { createContext, useState } from 'react';
export const Store = createContext();


const StoreContext = ({ children }) => {
   
    let [total_sms, setTotal_sms] = useState('');

    let states = {

        total_sms: [total_sms, setTotal_sms],
      
    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;