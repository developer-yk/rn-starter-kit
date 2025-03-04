export const ApiEnvironment={

    baseURL: "https://your-api-url.com/", // Replace with actual URL
    dummyApi: "auth/dummy", // Replace with actual endpoint

    //End Points
    
    //Methods
    methods:{
        get:'GET',
        post:'POST',
        put:'PUT',
        delete:'DELETE'
    },

    //Headers
    headers:{
        keys:{
            contentType:'Content-Type',
            accept:'Accept'
        },
        values:{
            multipartformdata:'multipart/form-data',
            applicationJson:'application/json'
        }
    }
    
}