import { v4 as uuid } from "uuid"
import Hashids from "hashids"

export default function uniqueId() {
  const hashids = new Hashids(uuid().toString())
  return hashids.encode(Date.now())
}
