'use strict';

function ipToInt(ip = '127.0.0.1') {
  return ip
    .split('.')
    .map(Number)
    .reduce((result, byte) => (result << 8) + byte, 0);
}
