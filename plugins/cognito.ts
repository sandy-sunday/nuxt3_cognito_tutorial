// plugins/cognito.ts

import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const poolData = {
    UserPoolId: runtimeConfig.public.userPoolId as string,
    ClientId: runtimeConfig.public.clientId as string,
  };

  const userPool = new CognitoUserPool(poolData);
  nuxtApp.provide('userPool', userPool);
});
