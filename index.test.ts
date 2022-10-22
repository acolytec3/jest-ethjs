import {describe, test} from "@jest/globals";
import {Transaction} from '@ethereumjs/tx'
import {Chain, Common, Hardfork} from '@ethereumjs/common'

describe('testsuite', () => {

   test('test', () => {

      const txParams = {
         nonce: '0x00',
         gasPrice: '0x09184e72a000',
         gasLimit: '0x2710',
         to: '0x0000000000000000000000000000000000000000',
         value: '0x00',
         data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
      };

      const common = new Common({chain: Chain.Mainnet, hardfork: Hardfork.Istanbul});
      const tx = Transaction.fromTxData(txParams, {common});

      const privateKey = Buffer.from(
          'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
          'hex'
      );

      const signedTx = tx.sign(privateKey);
      const serializedTx = signedTx.serialize();

   });

});