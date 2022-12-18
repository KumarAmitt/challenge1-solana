# challenge1-solana

## Creating a project

- Create a directory with the project name
- Create a Node project in your directory by entering: `npm init -y`
- Install the Solana Web3 JS library by entering: `npm install --save @solana/web3.js`
- Create a file called `index.js`


### Create a new keypair
```js
const newPair = new Keypair();
```

### Exact the public and private key from the keypair
```js
const publicKey = new PublicKey(newPair._keypair.publicKey).toString();
const privateKey = newPair._keypair.secretKey;
```

### Connect to the Devnet
```js
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
```

### To pass command line arguments to a Node.js program
```js
const args = process.argv;
```

## How to run the program?

- Run `git clone https://github.com/KumarAmitt/challenge1-solana.git` to clone the repository in your local machine
- Navigate to the project directory i.e, `challenge1-solana`
- Run `node index.js <YOUR PUBLIC_KEY>` to see the output.
- Example: `node index.js Dt3NKcNtUE4jNGJu8KRD6fF2KiwrFMKQ2F5dqWkbJ4zf`

## Sample code for index.js
```js
// Import Solana web3 functinalities
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");

// Create a new keypair
const newPair = new Keypair();

// Exact the public and private key from the keypair
const publicKey = new PublicKey(newPair._keypair.publicKey).toString();
const privateKey = newPair._keypair.secretKey;

// Connect to the Devnet
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Public Key of the generated keypair", publicKey);

// Get the wallet balance from a given private key
const getWalletBalance = async () => {
    try {
        // Connect to the Devnet
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        console.log("Connection object is:", connection);

        // Make a wallet (keypair) from privateKey and get its balance
        const myWallet = await Keypair.fromSecretKey(privateKey);
        const walletBalance = await connection.getBalance(
            new PublicKey(newPair.publicKey)
        );
        console.log(`Wallet balance: ${parseInt(walletBalance) / LAMPORTS_PER_SOL} SOL`);
    } catch (err) {
        console.log(err);
    }
};

const airDropSol = async () => {
    try {
        // Connect to the Devnet and make a wallet from privateKey
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const myWallet = await Keypair.fromSecretKey(privateKey);

        // Request airdrop of 2 SOL to the wallet
        console.log("Airdropping some SOL to my wallet!");
        const fromAirDropSignature = await connection.requestAirdrop(
            new PublicKey(myWallet.publicKey),
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
```


