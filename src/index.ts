import { TatumSDK, Haqq, Network } from "@tatumio/tatum";

console.log("init tatum sdk for haqq network");
const tatum = await TatumSDK.init<Haqq>({ network: Network.HAQQ });

console.log("\n\ngetting chain id");
const id = await tatum.rpc.chainId();
console.log(id);

console.log("\n\ngetting client version");
const version = await tatum.rpc.clientVersion();
console.log(version);

console.log("\n\ngetting mempool status");
const status = await tatum.rpc.txPoolStatus();
console.log(status);

console.log("\n\ngetting balance for account");
const balance = await tatum.rpc.getBalance(
  "0x664B07EA8969d643B0aCc4829c113F6C20514F65"
);
console.log(balance);

console.log("\n\ngetting logs for account");
const logs = await tatum.rpc.getLogs({
  address: "0x2C5B9a513bE2240e948a631bAaFB53cc0bEAcfda",
});
console.log(logs);

// Destroy Tatum SDK - needed for stopping background jobs
tatum.destroy();
