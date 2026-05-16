import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const transactionSearchParams = createSearchParamsCache({
  search: parseAsString.withDefault(""),
  category: parseAsString.withDefault("All"),
  sort: parseAsString.withDefault("latest"),
  page: parseAsInteger.withDefault(1),
});
