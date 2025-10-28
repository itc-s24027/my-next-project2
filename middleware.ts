import { create } from "domain";
import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

export const config = {
    matcher: ["/(.*)"],
};
//matcherを指定しない場合、すべてのリクエストに対してmiddlewareが実行される