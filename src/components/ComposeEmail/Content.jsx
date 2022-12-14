import React, { useState, useCallback } from 'react'
import axios from 'axios';
import Nav from '../Layouts/Secondary/Nav';
import QuillEditor from '../Email/QuillEditor';
import TypeHeadMultiSelect from './TypeHeadMultiSelect';
import AsyncSelect from 'react-select/async/dist/react-select.esm';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import Copyright from "../ui/Footer/Copyright/Component";
import FlipBarNotifyModule from "../UIElements/Notification/FlipBarNotification/FlipBarNotifyModule";

import Label from "./Label";
import "../Email/style.css";
import "./style.css";
import { request } from '../../services/utilities';
import { USER_NAME } from '../../services/constants';
import SSRStorage from '../../services/storage';


const storage = new SSRStorage();
const animatedComponents = makeAnimated();



const Content = ({ toggleHeaderPopup }) => {
    const [quil, setQuil] = useState('');
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [contacts, setContacts] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [emails, setEmails] = useState([]);
    const [error_todo, setError_todo] = useState(null);



    const [typeheadTextFields, setTypeHeadTextFields] = useState([
        false,
        false,
        false,
    ]);

    const flipBarNotifyArray = [{ type: 'success', desc: 'Your Messages has been sent' }];

    const fetchPatientList = async q => {
        try {
            const url = `https://emr-back-end.herokuapp.com/patient/find?q=${q}`;
            const rs = (await axios.get(url)).data;
            // console.log(rs);
            const { result, ...meta } = rs.data;
            const formatted = result.map(data => (
                { 'label': data.surname + ' ' + data.other_names, 'email': data.email, 'phone': data.phone_number, 'id': data.id }
            ));
            setContacts(formatted);
        } catch (err) {
            console.log('fetch patients err', err);
        }
    };

    const fetchPatients = async q => {
        const url = `https://emr-back-end.herokuapp.com/patient/find?q=${q}`;
        const res = (await axios.get(url)).data;
        return res;
    };
    const bodyMessage = () => {
        let x = quil.substr(3);
        let z = x.slice(0, -4);
        return z
    }
    // useEffect
    const sendMessage = async () => {
        const is_email = document.getElementById('sendCC');
        const user = await storage.getItem(USER_NAME);

        const data = { body: bodyMessage(), from, subject, recipient: is_email.checked === true ? emails : numbers, senderId: user.id };
        const url = is_email.checked === true ? `message/send/mail` : `message/send`;

        try {
            const rs = await request(url, 'POST', true, data);
            if (rs.success === false) {
                setError_todo(true);
            } else {
                setError_todo(false);
            }
            // console.log(rs);
        } catch (err) {
            console.log(err);
            setError_todo(false);

        }
    }

    // useEffect(() => {
    //     fetchPatientList()
    // }, [fetchPatientList])

    return (
        <div className="page-content-wrapper full-height">
            {error_todo === false ? <FlipBarNotifyModule
                notifications={flipBarNotifyArray}
                position={'top-right'}
                style={{ top: "59px" }}
            /> : ''}
            <div className="content full-height">
                {/* Start Secondary side bar nav */}
                <Nav to="compose_email" toggleHeaderPopup={toggleHeaderPopup} />
                {/* End Secondary side bar nav */}
                {/* Start email-coompose content */}
                <div className="inner-content full-height-vh d-md-flex justify-content-center align-items-center">
                    <div className="email-composer container-fluid">
                        <div className="row">
                            <div className="col-md-12 no-padding">
                                <form id="form-project" role="form" autoComplete="off">
                                    <div className="form-group-attached">
                                        <div className="row clearfix" style={{ height: '100px' }}>
                                            <div className="col-md-6">
                                                {/* <Label>Contacts</Label> */}
                                                <div
                                                    className={`form-group form-group-default typehead typehead-select ${typeheadTextFields[1] ? "focused" : ""
                                                        }`}
                                                    onClick={() =>
                                                        setTypeHeadTextFields([false, true, false])
                                                    }
                                                    id="sample-three"
                                                >
                                                    <AsyncSelect
                                                        isMulti
                                                        options={contacts}
                                                        isClearable
                                                        getOptionValue={option => option.id}
                                                        getOptionLabel={option =>
                                                            `${option.surname} ${option.other_names}`
                                                        }
                                                        defaultOptions
                                                        value={contacts}
                                                        name="contacts"
                                                        loadOptions={fetchPatients}
                                                        onChange={e => {
                                                            if (e) {
                                                                e.forEach((e) => {
                                                                    let y = emails.find(y => y === e.email);
                                                                    let x = numbers.find(x => x === e.phone_number);

                                                                    if (!x) {
                                                                        numbers.push(e.phone_number);
                                                                    }
                                                                    if (!y) {
                                                                        emails.push(e.email)
                                                                    }
                                                                });
                                                                setContacts(e);
                                                            } else {
                                                                setContacts([]);
                                                            }
                                                        }}
                                                        placeholder="search contacts.."
                                                        components={{ animatedComponents, DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                                        styles={{
                                                            control: (provided) => ({
                                                                ...provided,
                                                                borderRadius: '2px',
                                                                borderWidth: '1px',
                                                                border: 'none',
                                                                boxShadow: 'none',
                                                                marginLeft: '-9px',
                                                                maxHeight: '25px',
                                                                minHeight: '20px',
                                                                paddingTop: '0px',
                                                                marginTop: '-2px',
                                                            }),
                                                            valueContainer: (provided) => ({
                                                                ...provided,
                                                                padding: '0px 8px'
                                                            }),
                                                            groupHeading: (provided) => ({
                                                                ...provided,
                                                                color: '#212121',
                                                                fontSize: '13px',
                                                                fontWeight: 'bold',
                                                                textTransform: 'none',
                                                            }),
                                                            option: (provided, state) => ({
                                                                ...provided,
                                                                marginLeft: '10px',
                                                                width: '95%',
                                                                color: 'default',
                                                                cursor: 'pointer',
                                                                "&:active": {
                                                                    backgroundColor: "rgba(33, 33, 33, 0.07)"
                                                                },
                                                                backgroundColor: state.isSelected ? "rgba(33, 33, 33, 0.07)" : "default",
                                                                backgroundColor: state.isFocused ? "rgba(33, 33, 33, 0.07)" : "default",
                                                                borderRadius: '3px'
                                                            }),
                                                            menu: (provided) => ({
                                                                ...provided,
                                                                marginTop: '5px',
                                                                width: '105%',
                                                                marginLeft: '-9px',
                                                                borderTopLeftRadius: '0px',
                                                                borderTopRightRadius: '0px'
                                                            }),
                                                            multiValue: (provided, state) => ({
                                                                ...provided,
                                                                backgroundColor: '#e0e0e0',
                                                                backgroundImage: 'none',
                                                                border: 'none',
                                                                boxShadow: 'none',
                                                                color: 'inherit',
                                                                borderRadius: '99px',
                                                                margin: '0px 6px 0px 0',
                                                                padding: '0 2px 0 2px',
                                                                lineHeight: '21px'
                                                            }),
                                                            multiValueLabel: (provided, state) => ({
                                                                ...provided,
                                                                padding: '0 2px 0 2px',
                                                                fontSize: '13px'
                                                            }),
                                                            multiValueRemove: (provided, state) => ({
                                                                ...provided,
                                                                backgroundColor: 'none',
                                                                cursor: 'pointer',
                                                                border: 'none',
                                                                paddingRight: '2px',
                                                                paddingTop: '0px',
                                                                paddingBottom: '0px',
                                                                paddingLeft: '0px',
                                                                "&:hover": {
                                                                    backgroundColor: 'transparent'
                                                                },
                                                            })

                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-default">
                                                    <label>From:</label>
                                                    <input type="text" value={from} onChange={e => setFrom(e.target.value)} className="form-control" name="cc" placeholder="Enter sender name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group form-group-default">
                                            <label>Subject</label>
                                            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="form-control" name="subject" />
                                        </div>
                                    </div>
                                </form>

                                <QuillEditor quil={quil} setQuil={setQuil} />
                            </div>
                        </div>
                        <div className="row p-b-10 p-t-10">
                            <div className="col-md-11 d-md-flex d-lg-flex d-xl-flex d-block align-items-start">
                                <div className="form-check d-flex m-t-5">
                                    <input id="sendCC" type="checkbox" value="1" onChange={() => { }} />
                                    <label className="d-none d-lg-block small-text" htmlFor="sendCC">Send a copy to email address(es).</label>
                                    <label className="d-md-none small-text" htmlFor="sendCC">Send me a CC</label>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <button aria-label="" onClick={() => sendMessage()} className="btn btn-complete btn-lg pull-right btn-icon-left"><i className="pg-icon">send</i>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End email-coompose content */}
            </div>
            <Copyright
                year={"2014"}
                brand={"ANEWIT"}
                reserved={"All rights reserved."}
                terms={"Terms of use"}
                policy={"Privacy Policy"}
            />
        </div>
    )
}

export default Content
