# challenge1-solana

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
-Navigate to the project directory i.e, `challenge1-solana`
- Run `node index.js <YOUR PUBLIC_KEY>` to see the output.
- Example: `node index.js Dt3NKcNtUE4jNGJu8KRD6fF2KiwrFMKQ2F5dqWkbJ4zf`


