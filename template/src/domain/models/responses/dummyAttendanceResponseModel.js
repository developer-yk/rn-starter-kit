class DummyResponseModel{
    constructor (arg_1,arg_2,arg_3,arg_4) {
        this.arg_1=arg_1;
        this.arg_2=arg_2;
        this.arg_3=arg_3;
        this.arg_4=arg_4;
   }
   toJson(){
    let {arg_1,arg_2,arg_3,arg_4}=this;
    return {arg_1,arg_2,arg_3,arg_4};
   }
 }
export default DummyResponseModel;