
import axios from "axios"
import type PlayerDto from "./models/playerDto";

const http = axios.create({
    baseURL: "http://localhost:5081/",
    headers: {
        // Authorization: "Bearer {token}",
        MyCustomHeader: "BlaBla"
    }
})

export async function getPlayers(): Promise<PlayerDto[]> {
    const response = await http.get<PlayerDto[]>("/players");
    return response.data;
}

export async function getPlayer(id: number): Promise<PlayerDto> {
    const response = await http.get<PlayerDto>(`/players/${id}`);
    return response.data;
}

export async function updatePlayer(player: PlayerDto): Promise<void> {
    const response = await http.put<void>(`/players/${player.id}`, JSON.stringify(player));
    return response.data;
}

export async function createPlayer(player: PlayerDto): Promise<PlayerDto> {
    const response = await http.post<PlayerDto>(`/players`, JSON.stringify(player));
    return response.data;
}

export async function getAllPlayerColors(): Promise<string[]> {
    const response = await http.get<string[]>(`/player-colors`);
    return response.data;
}