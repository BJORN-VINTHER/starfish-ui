
import axios from "axios"
import type PlayerDto from "./models/playerDto";

export async function getPlayers(): Promise<PlayerDto[]> {
    const response = await axios.get<PlayerDto[]>("/players");
    console.log(response);
    return response.data;
}

export async function getPlayer(id: number): Promise<PlayerDto> {
    const response = await axios.get<PlayerDto>(`/players/${id}`);
    console.log(response);
    return response.data;
}

export async function updatePlayer(player: PlayerDto): Promise<void> {
    const response = await axios.put<void>(`/players/${player.id}`, JSON.stringify(player));
    console.log(response);
    return response.data;
}

export async function createPlayer(player: PlayerDto): Promise<PlayerDto> {
    const response = await axios.post<PlayerDto>(`/players`, JSON.stringify(player));
    console.log(response);
    return response.data;
}