// // import { users } from "@shared/schema";

// // modify the interface with any CRUD methods
// // you might need

// export interface IStorage {
//   getUser(id);
//   getUserByUsername(username);
//   createUser(user);
// }

// export class MemStorage implements IStorage {
//   users;
//   currentId;

//   constructor() {
//     this.users = new Map();
//     this.currentId = 1;
//   }

//   async getUser(id: number): Promise<User | undefined> {
//     return this.users.get(id);
//   }

//   async getUserByUsername(username: string): Promise<User | undefined> {
//     return Array.from(this.users.values()).find(
//       (user) => user.username === username,
//     );
//   }

//   async createUser(insertUser: InsertUser): Promise<User> {
//     const id = this.currentId++;
//     const user: User = { ...insertUser, id };
//     this.users.set(id, user);
//     return user;
//   }
// }

// export const storage = new MemStorage();
