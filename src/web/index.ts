import { TatumSDK, Network, Haqq } from "@tatumio/tatum";

async function start() {
  const tatum = await TatumSDK.init<Haqq>({ network: Network.HAQQ });

  async function getChainIDAndClientVersion() {
    const chainId = await tatum.rpc.chainId();
    const clientVersion = await tatum.rpc.clientVersion();

    console.log({ chainId, clientVersion });
  }

  async function connectWallet() {
    const account = await tatum.walletProvider.metaMask.connect();

    console.log({ account });
    return account;
  }

  async function getBalance() {
    const account = await connectWallet();
    const balance = await tatum.token.getBalance({
      addresses: [account],
    });

    console.log({ balance });
  }

  async function sendTransaction() {
    const account = await connectWallet();
    const tx = await tatum.walletProvider.metaMask.transferNative(
      account,
      "0.001"
    );

    console.log({ tx });
  }

  document
    .getElementById("get-chain-id-and-client-version")
    ?.addEventListener("click", getChainIDAndClientVersion);
  document
    .getElementById("connect-wallet")
    ?.addEventListener("click", connectWallet);
  document.getElementById("get-balance")?.addEventListener("click", getBalance);
  document
    .getElementById("send-transaction")
    ?.addEventListener("click", sendTransaction);
}

start();
