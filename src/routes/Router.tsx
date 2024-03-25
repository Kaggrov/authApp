import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppwriteContext} from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(res => {
        setIsLoading(false);

        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch(_ => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [isLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
        <AppStack/>
    </NavigationContainer>
  );
};

export default Router;
