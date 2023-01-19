
import axios from "axios"

export async function getPlayers() {
    const response = await axios.get("/players");
    console.log(response);
    return response.data;
}

export async function getPlayer(id: number) {
    const response = await axios.get(`/players/${id}`);
    console.log(response);
    return response.data;
}