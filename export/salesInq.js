let inputField = () => {
  return ` <input type="text" id="name" placeholder="name">
                <input type="text" id="company_name" placeholder="Company name">
                <input type="tel" id="contact" placeholder="contact number">
                <input type="text" id="designation_name" placeholder="designation name">
                <input type="email" id="mail_Id" placeholder="Email id">
                <input type="text" id="city" placeholder="city">`;
};

let captcha = () => {
  return `  <label> <input type="checkbox" name="" id="captcha_box">
                    i'm not a robot</label>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="">`;
};

export { inputField, captcha };
