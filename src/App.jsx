import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./Counter";

const App = () => {
  // const [persistentMode, setPersistentMode] = useAutoThemeMode();
  return (
    // <IntlProvider
    //   locale={language}
    //   defaultLocale="en-GB"
    //   messages={loader ? loader() : undefined}
    // >
    //   <ThemeProvider
    //     initialMode={persistentMode}
    //     onChangeMode={setPersistentMode}
    //   >
    //     <AuthProvider
    //       authority={
    //         "https://identity.eu-dev.keyloop.io/.well-known/openid-configuration"
    //       }
    //       client_id={"app.appointment-config"}
    //       audience={"svc.appointment-config"}
    //       scope={"openid email profile svc.appointment-config"}
    //     >
    <Counter />
    //     </AuthProvider>
    //   </ThemeProvider>
    // </IntlProvider>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
