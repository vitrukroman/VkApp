'use strict';


let _accessToken,
  _expiryAt;

const resetAccessToken = () => {
  _accessToken = '';
  _expiryAt = Date.now();
};

const getAccessToken = () => {
  if (!_accessToken || _expiryAt <= Date.now()) {
    resetAccessToken();
  }

  return _accessToken;
};

const setAccessToken = (token, expiryAt) => {
  _accessToken = token;
  _expiryAt = expiryAt;
};

export default {getAccessToken, setAccessToken};