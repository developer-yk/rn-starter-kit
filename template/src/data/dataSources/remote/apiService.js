import DummyRequestModel from "../../../domain/models/requests/dummyPaymentRequestModel";
import DummyResponseModel from "../../../domain/models/responses/dummyAttendanceResponseModel";
import { ApiEnvironment } from "../../apiEnvironment/apiEnvironment";

class ApiService extends ApiRepository {
  //Nursery Login
  async dummyFunction(arg_1,arg_2,arg_3,arg_4) {
    try {
      //Headers
      var myHeaders = new Headers();
      myHeaders.append(ApiEnvironment.headers.keys.contentType, ApiEnvironment.headers.values.applicationJson);
      myHeaders.append(ApiEnvironment.headers.keys.accept, ApiEnvironment.headers.values.applicationJson);

      //Body
      let dummyRequestModel = new DummyRequestModel(arg_1,arg_2,arg_3,arg_4);
      var raw = JSON.stringify(dummyRequestModel.toJson());

      //Request Options
      var requestOptions = {
        method: ApiEnvironment.methods.post,   // Method should be changed according to requirement
        headers: myHeaders,    // Headers should be changed according to requirement
        body: raw,        // Body should be changed according to requirement
      };

      //Hitting Api
      const response = await fetch(ApiEnvironment.baseURL + ApiEnvironment.dummyApi, requestOptions);

      //Converting it into json format
      const resJson = await response.json();

      //Chenking Authenticity
      if (resJson.success === true) {
        return new DataState(new DummyResponseModel(resJson.data, resJson.access_token, resJson.token_type, resJson.success), null);  // Change the response model and parameters according to requirement
      } else {
        if (resJson.message !== undefined) {
          return new DataState(null, resJson.message);
        } else if (resJson.error !== undefined) {
          return new DataState(null, JSON.stringify(resJson.error));
        } else {
          return new DataState(null, `Something went Wrong: ${resJson}`);
        }

      }
    } catch (exception) {
      return new DataState(null, exception);
    }
  }

}

export default ApiService;