import type PlayerDto from "@/http/models/playerDto";
import { rest } from "msw";

export const handlers = [
  rest.get("/players/:playerId", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<PlayerDto>({
        id: 5,
        name: "Torben",
        color: "#FFF",
      })
    );
  }),
  rest.get("/players", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<PlayerDto[]>([
        {
          id: 3,
          name: "Torben",
          color: "#FFF",
        },
        {
          id: 4,
          name: "Dan",
          color: "#222",
        },
      ])
    );
  }),
  rest.put("/players/:id", async (req, res, ctx) => {
    // const input = await req.json<PlayerDto>();
    return res(
      ctx.status(200),
      // ctx.json(input)
    );
  }),
  rest.post("/players", async (req, res, ctx) => {
    const input = await req.json<PlayerDto>();
    return res(
      ctx.status(200),
      ctx.json<PlayerDto>({
        id: 5,
        name: input.name,
        color: input.color,
      })
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
