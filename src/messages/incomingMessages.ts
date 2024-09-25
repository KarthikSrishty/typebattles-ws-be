
import z from "zod";
export type ActiveItemType = {
    section: string;
    text: string;
}
export enum SupportedMessage {
    AddRoom = "ADD_ROOM",
    JoinRoom = "JOIN_ROOM",
    VerifyUser = "VERIFY_USER",
    GetAndNotify = "GET_AND_NOTIFY",
    CreateBattle = "CREATE_BATTLE",
    StartBattle = "START_BATTLE",
    UpdatePos = "UPDATE_POS",
    UpdateBattleInfo = "UPDATE_BATTLE_INFO",
    NewBattle = "NEW_BATTLE",
    GameConfig = "GAME_CONFIG",
    QuitBattle = "QUIT_BATTLE",
}
export type IncomingMessage = {
    type: SupportedMessage.AddRoom,
    payload: AddRoomMessageType
} | {
    type: SupportedMessage.JoinRoom,
    payload: InitMessageType
} | {
    type: SupportedMessage.VerifyUser,
    payload: VerifyUserMessageType
} | {
    type: SupportedMessage.GetAndNotify,
    payload: GetAndNotifyMessageType
} | {
    type: SupportedMessage.CreateBattle,
    payload: CreateBattleMessageType
} | {
    type: SupportedMessage.StartBattle,
    payload: StartBattleMessageType
} | {
    type: SupportedMessage.UpdatePos,
    payload: UpdatePosMessageType
} | {
    type: SupportedMessage.UpdateBattleInfo,
    payload: UpdateBattleInfoType
} | {
    type: SupportedMessage.NewBattle,
    payload: NewBattleMessageType
} | {
    type: SupportedMessage.GameConfig,
    payload: { roomId: string, gameConfig: ActiveItemType[] }
} | {
    type: SupportedMessage.QuitBattle,
    payload: { roomId: string, userId: string }
};
export const VerifyUserMessage = z.object({
    userId: z.string(),
    roomId: z.string(),
})
export const UpdatePosMessage = z.object({
    userId: z.string(),
    roomId: z.string(),
    pos: z.object({

        wordIndex: z.number(),
        letterIndex: z.number()
    }),
    name: z.string(),
})
export const StartBattleMessage = z.object({
    userId: z.string(),
    roomId: z.string()
})
export type VerifyUserMessageType = z.infer<typeof VerifyUserMessage>;
export type UpdatePosMessageType = z.infer<typeof UpdatePosMessage>;
export type StartBattleMessageType = z.infer<typeof StartBattleMessage>;
export const AddRoomMessage = z.object({
    name: z.string(),
    image: z.string(),
    userId: z.string(),
})
export type AddRoomMessageType = z.infer<typeof AddRoomMessage>;
export const InitMessage = z.object({
    name: z.string(),
    userId: z.string(),
    image: z.string(),
    roomId: z.string(),
})

export type InitMessageType = z.infer<typeof InitMessage>;

export const UpdateBattleInfoMessage = z.object({
    roomId: z.string(),
    userId: z.string(),
    battle_infoType: z.string()
})
export const NewBattleMessage = z.object({ roomId: z.string() });
export type NewBattleMessageType = z.infer<typeof NewBattleMessage>;
export type UpdateBattleInfoType = z.infer<typeof UpdateBattleInfoMessage>;
export const GetAndNotifyMessage = z.object({
    userId: z.string(),
    roomId: z.string(),
    name: z.string(),
    image: z.string(),
})
export type GetAndNotifyMessageType = z.infer<typeof GetAndNotifyMessage>;
export const CreateBattleMessage = z.object({
    roomId: z.string(),
    userId: z.string()
})

export type CreateBattleMessageType = z.infer<typeof CreateBattleMessage>;

