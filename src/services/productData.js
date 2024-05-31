import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath : 'productApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3000/'
    }),
    tagTypes : ['products'],
    endpoints : builder => ({
        products : builder.query({
            query : () => '/products',
            providesTags : ['products']
        }),
        productId : builder.query({
            query : id => `/products/${id}`,
            providesTags : ['products']
        }),
        postProduct : builder.mutation({
            query : productData => ({
                url : '/products',
                method : 'POST',
                body : JSON.stringify(productData)
            }),
            invalidatesTags : ['products']
        }),
        putProduct : builder.mutation({
            query : (id, ...rest) => ({
                url : `/products/${id}`,
                method : 'PUT',
                body : JSON.stringify(rest)
            }),
            invalidatesTags : ['products']
        }),
        deleteProduct : builder.mutation({
            query : id => ({
                url :  `/products/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags : ['products']
        })
    })
})

export const {useProductsQuery, useProductIdQuery, usePostProductMutation, usePutProductMutation, useDeleteProductMutation} = productApi

// export const productApi = createApi({
//     baseQuery : fetchBaseQuery({
//         baseUrl : 'http://localhost:3000/'
//     }),
//     endpoints : builder => ({
//         product : builder.query({
//             query : () => '/products'
//         }),
//         productId : builder.query({
//             query : id => `/product/${id}`
//         }),
//         postProduct : builder.mutation({
//             query : productData => ({
//                 url : `/products`,
//                 method : 'POST',
//                 body : JSON.stringify(productData)
//             })
//         }),
//         putProduct : builder.mutation({
//             query : (id, ...rest) => ({
//                 url : `/product/${id}`,
//                 method : 'PUT',
//                 body : JSON.stringify(rest)
//             })
//         }),
//         deleteProduct: builder.mutation({
//             query : id => ({
//                 url : `/product/${id}`,
//                 method : 'DELETE'
//             })
//         })
//     })
// })












// export const productApi = createApi({
//     reducerPath: 'productApi',
//     baseQuery : fetchBaseQuery({
//         baseUrl : 'http://localhost:3000/'
//     }),
//     endpoints: builder => ({
//         data : builder.query({
//             query : () => '/products',
//         }),
//         productId: builder.query({
//             query : id => `products?id=${id}`
//         }),
//         postProduct: builder.mutation({
//             query : contact => ({
//                 url : '/products',
//                 method : 'POST',
//                 body : JSON.stringify(contact)
//             })
//         }),
//         putProduct : builder.mutation({
//             query : ({id,...rest}) => ({
//                 url : `/products/${id}`,
//                 method : 'PUT',
//                 body : JSON.stringify(rest)
//             })
//         }),
//         deleteProduct : builder.mutation({
//             query : id => ({
//                 url :  `/products/${id}`,
//                 method : 'DELETE'
//             })
//         })
//     })
// })