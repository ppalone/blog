import { format } from "date-fns"

export const f = (d) => {
  return format(new Date(d), "do LLL, yyyy")
}