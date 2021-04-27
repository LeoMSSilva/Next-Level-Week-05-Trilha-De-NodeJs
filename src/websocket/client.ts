import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessagesService";

interface IParams {
	email: string;
	text: string;
}

io.on("connect", (socket) => {
	const connectionsService = new ConnectionsService();
	const usersService = new UsersService();
	const messagesService = new MessagesService();

	socket.on("client_first_access", async (params) => {
		const socket_id = socket.id;
		const { email, text } = params as IParams;

		const userExists = await usersService.findByEmail(email);
		const user_id = !userExists
			? (await usersService.create(email)).id
			: userExists.id;

		const connection = await connectionsService.findByUserId(user_id);
		if (connection) {
			connection.socket_id = socket.id;
			await connectionsService.create(connection);
		} else await connectionsService.create({ socket_id, user_id });

		await messagesService.create({ text, user_id });
	});
});
