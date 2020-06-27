import React from 'react';
import StaticLoginAppearance from "components/StaticLoginAppearance.js";
import ValidationLoginForm from "components/ValidationLoginForm.js";


const LoginForm = () => {
         return(
          <div>
            <StaticLoginAppearance>
              <ValidationLoginForm/>
            </StaticLoginAppearance>
          </div>
    )
}
export default LoginForm;