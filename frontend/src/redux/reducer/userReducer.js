

const initialState = {
    name:'',
    email:'',
    profileImage:'',
    chatHistory:[],
    isLoggedIn:false
}
  
  
function userReducer(state = initialState, action) {  

    switch (action.type) {
        
        case 'SET_USER':
            return{
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                profileImage: action.payload.profileImage,
                chatHistory:action.payload.chatHistory,
                isLoggedIn: true
            }
        case 'GET_USER':
            return state    
        default:
            return state
    }
  }

  export default userReducer;