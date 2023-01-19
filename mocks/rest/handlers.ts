import { rest } from "msw";

export const handlers = [
  rest.get("/players/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        playerName: "Torben",
        color: "#FFF",
      })
    );
  }),
  rest.get("/players", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          playerName: "Torben",
          color: "#FFF",
        },
        {
          playerName: "Dan",
          color: "#222",
        },
      ])
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
