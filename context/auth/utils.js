import { BigNumber, utils } from 'ethers';
import { hashSync } from 'bcryptjs';
import { PrivateKey } from '@textile/hub';

export function generateMessageForEntropy(address, appName, secret) {
  return `
******************************************************************************** 
READ THIS MESSAGE CAREFULLY.
DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND WRITE
ACCESS TO THIS APPLICATION.  
DO NOT SIGN THIS MESSAGE IF THE FOLLOWING IS NOT TRUE OR YOU DO NOT CONSENT
TO THE CURRENT APPLICATION HAVING ACCESS TO THE FOLLOWING APPLICATION.
********************************************************************************  
The Ethereum address used by this application is:  

${address}

By signing this message, you authorize the current application to use the  
following app associated with the above address:  

${appName}

The hash of your non-recoverable, private, non-persisted password or secret  
phrase is:  

${secret}

********************************************************************************  
ONLY SIGN THIS MESSAGE IF YOU CONSENT TO THE CURRENT PAGE ACCESSING THE KEYS  
ASSOCIATED WITH THE ABOVE ADDRESS AND APPLICATION.  
AGAIN, DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND  
WRITE ACCESS TO THIS APPLICATION.  
******************************************************************************** 
`;
}

export async function genPrivateKey({ account, signer, secret }) {
  const secretHash = hashSync(secret, 10);
  const message = generateMessageForEntropy(account, 'Games Vault', secretHash);
  const signedText = await signer.signMessage(message);
  const hash = utils.keccak256(signedText);
  if (hash === null) {
    throw new Error(
      'No account is provided. Please provide an account to this application.'
    );
  }
  const array = hash
    .replace('0x', '')
    .match(/.{2}/g)
    .map((hexNoPrefix) => BigNumber.from(`0x${hexNoPrefix}`).toNumber());

  if (array.length !== 32) {
    throw new Error(
      'Hash of signature is not the correct size! Something went wrong!'
    );
  }
  const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(array));
  return identity;
}
