 import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL
} from "@solana/web3.js";

export async function sendSol(wallet, amount) {
  const connection = new Connection("https://api.devnet.solana.com");

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey("RECEIVER_ADDRESS"),
      lamports: amount * LAMPORTS_PER_SOL
    })
  );

  const signature = await wallet.sendTransaction(transaction, connection);
  await connection.confirmTransaction(signature);

  return signature;
}