class DataState{
  constructor (data,exception) {
   this.data = data;
   this.exception = exception;
 }
 toJson(){
     let {data,exception}=this;
     return {data,exception};
 }
}
export default DataState;