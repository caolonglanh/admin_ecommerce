import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_RESET,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_EDIT_FAIL,
  CATEGORY_EDIT_REQUEST,
  CATEGORY_EDIT_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_RESET,
  CATEGORY_UPDATE_SUCCESS,
} from "../Constants/CategoryConstant";

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload.categories };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//CREATE BANNER
export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case CATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, categories: action.payload };
    case CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

//EDIT CATEGORY
export const categoryEditReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case CATEGORY_EDIT_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_EDIT_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_EDIT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//UPDATE CATEGORY
export const categoryUpdateReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_UPDATE_RESET:
      return { category: {} };

    default:
      return state;
  }
};
