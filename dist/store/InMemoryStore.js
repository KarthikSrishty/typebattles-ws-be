"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStore = void 0;
let globalChatId = 0;
class InMemoryStore {
    constructor() {
        this.store = new Map();
    }
    initRoom(roomId) {
        this.store.set(roomId, {
            roomId,
            chats: []
        });
    }
    getChats(roomId, limit, offset) {
        const room = this.store.get(roomId);
        if (!room) {
            return [];
        }
        return room.chats.reverse().slice(0, offset).slice(-1 * limit);
    }
    addChat(userId, name, roomId, message) {
        if (!this.store.get(roomId)) {
            this.initRoom(roomId);
        }
        const room = this.store.get(roomId);
        if (!room) {
            return;
        }
        const chat = {
            id: (globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes: []
        };
        console.log(chat);
        room.chats.push(chat);
        return chat;
    }
    upvote(userId, roomId, chatId) {
        const room = this.store.get(roomId);
        console.log(room === null || room === void 0 ? void 0 : room.chats[0].upvotes);
        if (!room) {
            return;
        }
        // Todo: Make this faster
        const chat = room.chats.find(({ id }) => id == chatId);
        console.log(chat, chatId);
        if (chat) {
            if (chat.upvotes.find(x => x === userId)) {
                return chat;
            }
            chat.upvotes.push(userId);
        }
        return chat;
    }
}
exports.InMemoryStore = InMemoryStore;
