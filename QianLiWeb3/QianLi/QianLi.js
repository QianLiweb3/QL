const connectMetamask = () => {
    window.ethereum.enable().then(()=> {
      alert("已连接MetaMask钱包")
      const address = window.ethereum.selectedAddress;
      document.getElementById("wallet-address").innerHTML = address;
    })
  }


