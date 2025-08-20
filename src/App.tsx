// src/App.tsx
import { useState } from 'react';
import Layout from './components/common/Layout';
import RegistrationForm from './components/registration/RegistrationForm';
import TicketPage from './components/ticket/TicketPage';
import { type UserData } from './types';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <Layout>
      {!isSubmitted ? (
        <RegistrationForm 
          onSubmit={(data) => {
            setUserData(data);
            setIsSubmitted(true);
          }} 
        />
      ) : userData ? (
        <TicketPage userData={userData} />
      ) : null}
    </Layout>
  );
}

export default App;