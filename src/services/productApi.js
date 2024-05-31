import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath : 'productApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3000/'
    }),
    tagTypes : ['product'],
    endpoints : builder => ({
        products : builder.query({
            query : () => '/products',
            providesTags : ['product']
        }),
        data : builder.query({
            query : (id) => `products?id=${id}`,
        }),
        postProduct : builder.mutation({
            query : contact => ({
                url : `/products`,
                method : 'POST',
                body : contact
            }),
            invalidatesTags : ['product']
        }),
        putProduct : builder.mutation({
            query : ({id, ...rest}) => ({
                url : `/products/${id}`,
                method : 'PUT',
                body : rest
            })
        }),
        deleteProduct : builder.mutation({
            query : id => ({
                url : `/products/${id}`,
                method : 'DELETE'
            })
        })
    })
})

console.log(productApi)

export const {useProductsQuery, useDataQuery, usePostProductMutation, usePutProductMutation, useDeleteProductMutation} = productApi
