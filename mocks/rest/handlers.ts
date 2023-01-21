import type PlayerDto from "@/http/models/playerDto";
import { rest } from "msw";
import { players } from "./data"

export const handlers = [
  rest.get("/players/:id", (req, res, ctx) => {
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
  rest.get("/players", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<PlayerDto[]>(players)
    );
  }),
  rest.put("/players/:id", async (req, res, ctx) => {
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
  rest.post("/players", async (req, res, ctx) => {
    const input = await req.json<PlayerDto>();
    input.id = 100;
    players.push(input);
    return res(
      ctx.status(200),
      ctx.json<PlayerDto>(input)
    );
  }),
  
];

// Describe the shape of the "req.body".
// interface UpdatePostRequestBody {
//   title: "string"
//   viewsCount: string
// }

// // Describe the shape of the mocked response body.
// interface UpdatePostResponseBody {
//   updatedAt: Date
// }

// // Describe the shape of the "req.params".
// interface UpdatePostRequestParams {
//   postId: string
// }

// rest.update
//   <UpdatePostRequestBody, UpdatePostResponseBody, UpdatePostRequestParams>(
//   '/post/:postId',
//   (req, res, ctx) => {
//     const { postId } = req.params
//     const { title, viewsCount } = req.body

//     return res(
//       ctx.json({
//         updatedAt: Date.now()
//       })
//     )
//   })
