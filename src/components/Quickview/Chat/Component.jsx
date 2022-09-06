import React, { useCallback, useEffect, useState } from 'react'

import ChatHeader from './ChatHeader';
import ChatGroupItems from './ChatGroupItems';
import Conversation from './Conversation/Component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SSRStorage from '../../../services/storage';
import { TOKEN_COOKIE } from '../../../services/constants';
import axios from 'axios';

const Component = () => {
	const [viewChat, setViewChat] = useState(false);
	const [loading, setLoading] = useState(true);
	const [contacts, setContacts] =useState([])
	const [index, setIndex] =useState(null)


const storage = new SSRStorage();

const fetchContacts = useCallback(
	async () => {
		const token = await  storage.getItem(TOKEN_COOKIE);

	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
		  try {
			const rs = await axios.get(
			  `https://deda-crm-backend.herokuapp.com/contact/all?page=1&limit=100`, config
			);
			const { result, ...meta } = rs.data;
			let filtered = result.filter(contact => contact.whatsappNum != null)
			setContacts(filtered.sort((a, b) => (a.contactName > b.contactName ? 1 : -1)))
			
		  } catch (err) {
			console.log("fetch contacts err", err);
			setLoading(false);
		  }
		},
		[]
	  );

	  useEffect(() => {
		if (loading) {
		  fetchContacts();
		}
	  }, [fetchContacts, loading]);

	return (
		<div className={`view-port clearfix ${viewChat ? " push-parrallax" : ""}`} id="chat">
			<div className="view bg-white">
				{ /* BEGIN View Header */}
				<ChatHeader
					list="Chat List"
					show="Show All" />
				{ /* END View Header */}
				<PerfectScrollbar>
				<div data-init-list-view="ioslist" className="list-view boreded no-top-border" style={{ height: '100%' }}>
					{
						contacts?.map((contact, i) =>(
							<ChatGroupItems key={i}
						header={`${contact.contactName[0].toLowerCase()}`}
						chats={[
							{ name: `${contact.contactName}`, image: `${process.env.PUBLIC_URL}/assets/img/profiles/1.jpg`, imageExt: `${process.env.PUBLIC_URL}/assets/img/profiles/1x.jpg`, message: "Hello there", click: setViewChat, setIndex: setIndex, key:`${i}` }
						]}
						click={setViewChat} 
						/>
						))
					}
					{/* BEGIN chat group a */}
					{/* <ChatGroupItems
						header="a"
						chats={[
							{ name: "ava floresaaaaaa", image: `${process.env.PUBLIC_URL}/assets/img/profiles/1.jpg`, imageExt: `${process.env.PUBLIC_URL}/assets/img/profiles/1x.jpg`, message: "Hello there", click: setViewChat }
						]}
						click={setViewChat} /> */}
					{/* END chat group a */}
					
					
				</div>
				</PerfectScrollbar>
			</div>
			{ /* BEGIN Conversation View  */}
			<Conversation click={setViewChat} contact={contacts[index]}/>
			{ /* END Conversation View  */}
		</div>
	)
}

export default Component
