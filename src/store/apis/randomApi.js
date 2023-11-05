import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const randomeQuoteApi = createApi({
    reducerPath: "randomQuote",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.quotable.io"
    }),
    endpoints(builder) {
        return {
            fetchRandomQuote: builder.query({
                query: () => {
                    return {
                        url: "/random",
                        method: 'GET'
                    }
                }
            })
        }
    }
})
export const { useFetchRandomQuoteQuery } = randomeQuoteApi;
export default randomeQuoteApi;
