 import connectionIns from "../database/db";


 export async function createUsertbale() {
    try {
        const query = `
        CREATE TABLE IF NOT EXISTS users (
            id uuid default gen_random_uuid() primary key,
            name varchar(100) not null check (char_length(name) >= 3 ),
            email varchar(100) unique not null,
            password text not null,
            role varchar(100) default 'User' check (role in ('User', 'Admin')),
            avatar jsonb default null,
            reset_password_token text default null,
            reset_password_expire timestamp default null,
            created_at timestamp default current_timestamp
        );
        `;
        await connectionIns.query(query)
    } catch (error) {
        console.error("error while creating user table", error);
        process.exit(1)
    }
 }