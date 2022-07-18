interface RouteConfig {
  id: string
  path: string
}

export const routes: RouteConfig[] = [
  {
    id: "home",
    path: "/",
  },
  {
    id: "typography",
    path: "/typography",
  },
]
