import { io } from 'socket.io-client';
import { API_URI } from './constants';

	// create connection to backend
	socket = io(`${API_URI}/chat`, { transports: ["websocket", "polling"] });

	if (socket) {
		//successful connection

		// listen for incoming messages
		socket.io.on("receive_chat", (payload) => {
			console.log(`message-received`, payload);
		});

		// call function to send message
		function sendMessage(data) {
			socket.emit("send_chat", data);
		}
	}
