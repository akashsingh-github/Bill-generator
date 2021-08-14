const SET_SNACK_BAR = "SET_SNACK_BAR";
const CLOSE_SNACK_BAR = "CLOSE_SNACK_BAR";
export function close_snack_bar() {
    return {
        type: CLOSE_SNACK_BAR
    };
}
//   FUNCTION FOR SHOWING SNACK BAR
export function set_snack_bar(payload, message) {
    var data = [];
    data.status = payload;
    data.message = message;
    return {
        type: SET_SNACK_BAR,
        payload: data
    };
}