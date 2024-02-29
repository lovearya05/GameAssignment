export const initialState = {
    user: null,
}
export const reducers = {

    setUser: (state, action)=>{
      state.user = action.payload
    },

}