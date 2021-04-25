import {
	Entity,
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	email: string;

	@CreateDateColumn()
	created_at: Date;

	construtor() {
		if (!this.id) this.id = uuid();
	}
}

export { User }
