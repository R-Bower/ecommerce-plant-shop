interface RouteConfig {
  getPath?: (id: string) => string
  id: string
  path: string
}

export const searchRoute: RouteConfig = {
  id: "search",
  path: "/plants/search",
}

export const plantDetailsRoute = {
  getPath: (id: string) => `/plants/${id}`,
  id: "plant-details",
  path: "/plants/[id]",
}
