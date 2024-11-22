"use strict";
import { EntitySchema } from "typeorm";

const UserSchema = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            type: "type",
            primary: true,
            generated: true
        },
        nombreCompleto: {
            type: "varchar",
            length: 225,
            nullable: false
        },
        rut: {
            type: "varchar",
            length: 12,
            nullable: false,
            unique: true
        },
        email: {
            type: "varchar",
            length: 225,
            nullable: false,
            unique: true
        },
        createdAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            nullable: false
        },
        updatedAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
            nullable: false
        }
    }
});

export default UserSchema;
