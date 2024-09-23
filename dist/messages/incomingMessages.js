"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBattleMessage = exports.GetAndNotifyMessage = exports.NewBattleMessage = exports.UpdateBattleInfoMessage = exports.InitMessage = exports.AddRoomMessage = exports.StartBattleMessage = exports.UpdatePosMessage = exports.VerifyUserMessage = exports.SupportedMessage = void 0;
const zod_1 = __importDefault(require("zod"));
var SupportedMessage;
(function (SupportedMessage) {
    SupportedMessage["AddRoom"] = "ADD_ROOM";
    SupportedMessage["JoinRoom"] = "JOIN_ROOM";
    SupportedMessage["VerifyUser"] = "VERIFY_USER";
    SupportedMessage["GetAndNotify"] = "GET_AND_NOTIFY";
    SupportedMessage["CreateBattle"] = "CREATE_BATTLE";
    SupportedMessage["StartBattle"] = "START_BATTLE";
    SupportedMessage["UpdatePos"] = "UPDATE_POS";
    SupportedMessage["UpdateBattleInfo"] = "UPDATE_BATTLE_INFO";
    SupportedMessage["NewBattle"] = "NEW_BATTLE";
    SupportedMessage["GameConfig"] = "GAME_CONFIG";
    SupportedMessage["QuitBattle"] = "QUIT_BATTLE";
})(SupportedMessage || (exports.SupportedMessage = SupportedMessage = {}));
exports.VerifyUserMessage = zod_1.default.object({
    userId: zod_1.default.string(),
    roomId: zod_1.default.string(),
});
exports.UpdatePosMessage = zod_1.default.object({
    userId: zod_1.default.string(),
    roomId: zod_1.default.string(),
    pos: zod_1.default.object({
        wordIndex: zod_1.default.number(),
        letterIndex: zod_1.default.number()
    }),
    name: zod_1.default.string(),
});
exports.StartBattleMessage = zod_1.default.object({
    userId: zod_1.default.string(),
    roomId: zod_1.default.string()
});
exports.AddRoomMessage = zod_1.default.object({
    name: zod_1.default.string(),
    image: zod_1.default.string(),
    userId: zod_1.default.string(),
});
exports.InitMessage = zod_1.default.object({
    name: zod_1.default.string(),
    userId: zod_1.default.string(),
    image: zod_1.default.string(),
    roomId: zod_1.default.string(),
});
exports.UpdateBattleInfoMessage = zod_1.default.object({
    roomId: zod_1.default.string(),
    userId: zod_1.default.string(),
    battle_infoType: zod_1.default.string()
});
exports.NewBattleMessage = zod_1.default.object({ roomId: zod_1.default.string() });
exports.GetAndNotifyMessage = zod_1.default.object({
    userId: zod_1.default.string(),
    roomId: zod_1.default.string(),
    name: zod_1.default.string(),
    image: zod_1.default.string(),
});
exports.CreateBattleMessage = zod_1.default.object({
    roomId: zod_1.default.string(),
    userId: zod_1.default.string()
});
