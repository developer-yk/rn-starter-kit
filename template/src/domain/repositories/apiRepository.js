/**
 * Abstract Class ApiRepository.
 *
 * @class ApiRepository
 */
class ApiRepository {

    constructor() {
      if (this.constructor == ApiRepository) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }

  
    dummyFunction(arg_1,arg_2,arg_3,arg_4) {
      throw new Error("Method 'dummyFunction(arg_1,arg_2,arg_3,arg_4)' must be implemented.");
    }

   
  }

  export default ApiRepository;