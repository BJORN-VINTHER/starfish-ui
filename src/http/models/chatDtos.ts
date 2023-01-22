
export interface MessageDto {
    message: string,
    timestamp: Date,
    playerId: number
} 

export interface SendMessageDto {
    user: string,
    message: string
}