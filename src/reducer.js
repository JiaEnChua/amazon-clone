export const initialState = {
  basket: [],
  notif: [],
};

export const notifDuration = 2;

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const getAggregatedProducts = (basket) => {
  var holder = {};
  var obj = [];

  basket.forEach(function (item) {
    if (holder.hasOwnProperty(item.title)) {
      holder[item.title].quantity = holder[item.title].quantity + 1;
    } else {
      holder[item.title] = {
        ...item,
        quantity: 1,
      };
    }
  });

  for (var prop in holder) {
    obj.push(holder[prop]);
  }

  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.title.toUpperCase();
    const bandB = b.title.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  obj.sort(compare);
  return obj;
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = state.basket;
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Item with Product ID: ${action.id} not in the basket!`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "ADD_NOTIF":
      // if (state.notif.length >= 4) {
      //   state.notif.length = 0;
      // }
      return {
        ...state,
        notif: [...state.notif, action.notif],
        lastClicked: new Date(),
      };

    case "EMPTY_NOTIF":
      return {
        ...state,
        notif: [],
      };

    case "POPHEAD_NOTIF":
      return {
        ...state,
        notif: state.notif.splice(0, 1),
      };

    default:
      return state;
  }
};

export default reducer;
