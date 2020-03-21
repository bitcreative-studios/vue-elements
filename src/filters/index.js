import merge from "lodash.merge"
import capitalize from "./capitalize-filter"
import pad from "./pad-filter"

export { default as capitalize } from "./capitalize-filter"
export { default as pad } from "./pad-filter"

// const filters = Object.assign({}, pad, capitalize)
export default merge(capitalize, pad)
