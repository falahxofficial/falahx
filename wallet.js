document.getElementById("walletBtn").addEventListener("click", async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      alert("Wallet connected: " + accounts[0]);
    } catch (err) {
      alert("Connection failed.");
    }
  } else {
    alert("MetaMask not detected.");
  }
});
