import {PlantFilterId} from "./plants.enums"

export type EnabledFilters = Record<string, boolean>

export type UrlFilterState = Record<string, EnabledFilters>

export type ActiveFilters = Record<PlantFilterId, Record<string, boolean>>
