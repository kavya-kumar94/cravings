import { RECEIVE_FOOD, RECEIVE_FOODS } from "../actions/food_actions";

const FoodsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FOODS:
      return Object.assign({}, state, action.foods.data);
    case RECEIVE_FOOD:
      return {
        [action.food.data.id]: action.food.data
      };
    default:
      return state;
  }
};

export default FoodsReducer;
