import { Middleware, ExpressErrorMiddlewareInterface  } from 'routing-controllers';

@Middleware(({ type: "after" }))
export default class ErrorHandler implements ExpressErrorMiddlewareInterface  {
  error(e: any, req: any, res: any, next: (err: any) => any) {
      const error = !e.code ? e : {
        key: e.key,
        message: e.message,
      };
      res.status(e.code || 500);
      res.json(error);
  }
}
