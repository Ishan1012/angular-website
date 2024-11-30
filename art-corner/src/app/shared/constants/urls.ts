export const BASE_URL = "http://localhost:4269";
export const PORT = 4269;

export const ARITFACTS_URL = BASE_URL + "/api/artifacts";
export const NEWSLETTERS_URL = BASE_URL + "/api/newsletters";
export const COMMUNITY_URL = BASE_URL + "/api/community";
export const ARITFACTS_BY_ID_URL = ARITFACTS_URL + "/";
export const COMMUNITY_BY_ID_URL = COMMUNITY_URL + "/";
export const ARITFACTS_BY_SEARCH_URL = ARITFACTS_URL + "/search/";
export const COMMUNITY_BY_SEARCH_URL = COMMUNITY_URL + "/search/";


export const USER_LOGIN_URL = BASE_URL + "/api/user/login";
export const USER_REGISTER_URL = BASE_URL + "/api/user/signup";
export const GET_USER_LIST_URL = BASE_URL + "/api/user/getAllUser";


export const POST_ARTIFACTS = ARITFACTS_URL + "/post-artifact";
export const POST_FEEDBACK = BASE_URL + "/api/feedback/post";