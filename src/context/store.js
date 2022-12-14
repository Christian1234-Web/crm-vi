import React, { createContext, useState } from 'react';
export const Store = createContext();


const StoreContext = ({ children }) => {

    let [total_sms, setTotal_sms] = useState('');
    let [username_l, setUsername_l] = useState('');
    let [search, setSearch] = useState('');



    let states = {
        username: [username_l, setUsername_l],
        total_sms: [total_sms, setTotal_sms],
        search: [search, setSearch]

    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;