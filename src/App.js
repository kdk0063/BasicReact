import React from 'react';

import 'bulma/css/bulma.css';

import ProfileHome from "./components/Profile/ProfileHome";
import Animals from './components/Animals/Animal';

function App() {
    return (
        <div>
            <ProfileHome/>   
            <hr />

            <Animals/>             
        </div>
    );
};

export default App;