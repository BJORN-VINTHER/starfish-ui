import type PlayerDto from "@/http/models/restDtos";
import { rest } from "msw";
import { playerColors, players } from "./data"

const baseUrl = "http://localhost:5081";

export const handlers = [
  // Players
  rest.get(`${baseUrl}/players/:id`, (req, res, ctx) => {
    const { id } = req.params
    const player = players.find(x => x.id === parseInt(id as string))
    if (player) {
      return res(
        ctx.status(200),
        ctx.json<PlayerDto>(player)
      );
    } else {
      return res(
        ctx.status(404),
      );
    }
  }),
  rest.get(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<PlayerDto[]>(players)
    );
  }),
  rest.put(`${baseUrl}/players/:id`, async (req, res, ctx) => {
    const input = await req.json<PlayerDto>();
    const { id } = req.params
    const player = players.find(x => x.id === parseInt(id as string))
    player!.name = input.name;
    player!.color = input.color;
    return res(
      ctx.status(200),
      // ctx.json(input)
    );
  }),
  rest.post(`${baseUrl}/players`, async (req, res, ctx) => {
    const input = await req.json<PlayerDto>();
    input.id = 100;
    players.push(input);
    return res(
      ctx.status(200),
      ctx.json<PlayerDto>(input)
    );
  }),
  
  // player colors
  rest.get(`${baseUrl}/player-colors`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<string[]>(playerColors)
    );
  }),
];
