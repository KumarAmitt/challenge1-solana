const {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const PUBLIC_KEY = process.argv[2];

const getWalletBalance = async () => {
  try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const walletBalance = await connection.getBalance(new PublicKey(PUBLIC_KEY));
      console.log(`Wallet balance: ${parseInt(walletBalance) / LAMPORTS_PER_SOL} SOL`);
  } catch (err) {
      console.log(err);
  }
};

const airDropSol = async () => {
  try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  
      console.log("Airdropping some SOL to my wallet!");
      const fromAirDropSignature = await connection.requestAirdrop(
          new PublicKey(PUBLIC_KEY),
          2 * LAMPORTS_PER_SOL
      );
      await connection.confirmTransaction(fromAirDropSignature);
  } catch (err) {
      console.log(err);
  }
};


// Show the wallet balance before and after airdropping SOL
const mainFunction = async () => {
  await getWalletBalance();
  await airDropSol();
  await getWalletBalance(); 
}

mainFunction();

