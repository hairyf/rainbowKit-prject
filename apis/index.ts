/**
 * @title Swagger Petstore
 * @description This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * @swagger 2.0
 * @version 1.0.6
 */

import type * as Types from './index.type'

export const baseURL = 'https://petstore.swagger.io/v2/'

/**
 * @summary uploads an image
 * @method post
 * @tags pet
 * @consumes multipart/form-data
 */
export async function postPetPetIdUploadImage(body: FormData, paths: Types.PostPetPetIdUploadImagePath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/pet/${paths.petId}/uploadImage`, {
    body,
    ...config,
  })
  return response.json() as Promise<Types.ApiResponse>
}
/**
 * @summary Add a new pet to the store
 * @method post
 * @tags pet
 * @consumes application/json; application/xml
 */
export async function postPet(body: Types.Pet, config?: RequestInit) {
  const response = await fetch(`${baseURL}/pet`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Update an existing pet
 * @method put
 * @tags pet
 * @consumes application/json; application/xml
 */
export async function putPet(body: Types.Pet, config?: RequestInit) {
  const response = await fetch(`${baseURL}/pet`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 * @method get
 * @tags pet
 */
export async function getPetFindByStatus(query: Types.GetPetFindByStatusQuery, config?: RequestInit) {
  const _query_ = `?${new URLSearchParams(Object.entries(query)).toString()}`
  const response = await fetch(`${baseURL}/pet/findByStatus${_query_}`, {
    ...config,
  })
  return response.json() as Promise<Types.Pet[]>
}
/**
 * @summary Finds Pets by tags
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @method get
 * @tags pet
 */
export async function getPetFindByTags(query: Types.GetPetFindByTagsQuery, config?: RequestInit) {
  const _query_ = `?${new URLSearchParams(Object.entries(query)).toString()}`
  const response = await fetch(`${baseURL}/pet/findByTags${_query_}`, {
    ...config,
  })
  return response.json() as Promise<Types.Pet[]>
}
/**
 * @summary Find pet by ID
 * @description Returns a single pet
 * @method get
 * @tags pet
 */
export async function getPetPetId(paths: Types.GetPetPetIdPath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/pet/${paths.petId}`, {
    ...config,
  })
  return response.json() as Promise<Types.Pet>
}
/**
 * @summary Updates a pet in the store with form data
 * @method post
 * @tags pet
 * @consumes application/x-www-form-urlencoded
 */
export async function postPetPetId(body: FormData, paths: Types.PostPetPetIdPath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/pet/${paths.petId}`, {
    body,
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Deletes a pet
 * @method delete
 * @tags pet
 */
export async function deletePetPetId(body: FormData, paths: Types.DeletePetPetIdPath, headers?: Types.DeletePetPetIdHeader, config?: RequestInit) {
  const response = await fetch(`${baseURL}/pet/${paths.petId}`, {
    body,
    headers,
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Place an order for a pet
 * @method post
 * @tags store
 * @consumes application/json
 */
export async function postStoreOrder(body: Types.Order, config?: RequestInit) {
  const response = await fetch(`${baseURL}/store/order`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<Types.Order>
}
/**
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @method get
 * @tags store
 */
export async function getStoreOrderOrderId(paths: Types.GetStoreOrderOrderIdPath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/store/order/${paths.orderId}`, {
    ...config,
  })
  return response.json() as Promise<Types.Order>
}
/**
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @method delete
 * @tags store
 */
export async function deleteStoreOrderOrderId(paths: Types.DeleteStoreOrderOrderIdPath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/store/order/${paths.orderId}`, {
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 * @method get
 * @tags store
 */
export async function getStoreInventory(config?: RequestInit) {
  const response = await fetch(`${baseURL}/store/inventory`, {
    ...config,
  })
  return response.json() as Promise<Record<string, number>>
}
/**
 * @summary Creates list of users with given input array
 * @method post
 * @tags user
 * @consumes application/json
 */
export async function postUserCreateWithArray(body: Types.User[], config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/createWithArray`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Creates list of users with given input array
 * @method post
 * @tags user
 * @consumes application/json
 */
export async function postUserCreateWithList(body: Types.User[], config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/createWithList`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Get user by user name
 * @method get
 * @tags user
 */
export async function getUserUsername(paths: Types.GetUserUsernamePath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/${paths.username}`, {
    ...config,
  })
  return response.json() as Promise<Types.User>
}
/**
 * @summary Updated user
 * @description This can only be done by the logged in user.
 * @method put
 * @tags user
 * @consumes application/json
 */
export async function putUserUsername(body: Types.User, paths: Types.PutUserUsernamePath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/${paths.username}`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Delete user
 * @description This can only be done by the logged in user.
 * @method delete
 * @tags user
 */
export async function deleteUserUsername(body: Types.User, paths: Types.DeleteUserUsernamePath, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/${paths.username}`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Logs user into the system
 * @method get
 * @tags user
 */
export async function getUserLogin(query: Types.GetUserLoginQuery, config?: RequestInit) {
  const _query_ = `?${new URLSearchParams(Object.entries(query)).toString()}`
  const response = await fetch(`${baseURL}/user/login${_query_}`, {
    ...config,
  })
  return response.json() as Promise<string>
}
/**
 * @summary Logs out current logged in user session
 * @method get
 * @tags user
 */
export async function getUserLogout(config?: RequestInit) {
  const response = await fetch(`${baseURL}/user/logout`, {
    ...config,
  })
  return response.json() as Promise<void>
}
/**
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @method post
 * @tags user
 * @consumes application/json
 */
export async function postUser(body: Types.User, config?: RequestInit) {
  const response = await fetch(`${baseURL}/user`, {
    body: JSON.stringify(body),
    ...config,
  })
  return response.json() as Promise<void>
}
