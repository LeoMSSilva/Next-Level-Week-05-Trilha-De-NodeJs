import { Request, Response } from "express"
import { ConnectionsService } from "../services/ConnectionsService";

class ConnectionsController {
	async create(req: Request, res: Response) {
		const { chat, username } = req.body;
		const connectionsService = new ConnectionsService();

		try {
			const connections = await connectionsService.create({ chat, username });
			return res.json(connections);
		} catch (e) {
			return res.status(400).json({ message: e.message, })
		}

	}
}

export { ConnectionsController };
