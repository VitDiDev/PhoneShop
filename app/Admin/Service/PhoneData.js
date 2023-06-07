function PhoneData() {
    this.getPhone = function () {
       return axios({
          method: 'get',
          url: 'https://647d8397af9847108549ca54.mockapi.io/Phone',
       });
    };
    this.addPhone = function (newPhone) {
       return axios({
          method: 'post',
          url: 'https://647d8397af9847108549ca54.mockapi.io/Phone',
          data: newPhone,
       });
    };
 
    this.deletePhone = function (id) {
       return axios({
          method: 'delete',
          url: `https://647d8397af9847108549ca54.mockapi.io/Phone/${id}`,
       });
    };
 
    this.getPhoneById = function (id) {
       return axios({
          method: 'get',
          url: `https://647d8397af9847108549ca54.mockapi.io/Phone/${id}`,
       });
    };
 
    this.updatePhone = function (id, newPhone) {
       return axios({
          method: 'put',
          url: `https://647d8397af9847108549ca54.mockapi.io/Phone/${id}`,
          data: newPhone,
       });
    };
 }