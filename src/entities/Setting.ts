import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	username: string;

	@Column()
	chat: boolean;

	@UpdateDateColumn()
	updated_at: Date;

	@CreateDateColumn()
	created_at: Date;

	construtor() {
		if (!this.id) this.id = uuid();
	}
}

export { Setting }
