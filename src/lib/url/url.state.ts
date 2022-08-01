import {atom} from "recoil"

import {UpdateReason} from "./url.types"

export const updateReasonAtom = atom<UpdateReason>({
  default: "reset",
  key: "updateReasonAtom",
})
