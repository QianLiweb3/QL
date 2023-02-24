// Connect to MetaMask
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      // Set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.defibit.io/"));
     
    }

function sendBNB001() {
  // Get the address
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      document.getElementById("error").innerHTML =  "已拒绝";
    } else if (accounts.length == 0) {
      document.getElementById("error").innerHTML = "未找到帐户！确保小狐狸钱包已解锁并连接到网络。";
    } else {
      document.getElementById("address").innerHTML = "当前连接的帐户 :" + accounts[0];
      var address = accounts[0];
      // Run the contract
      let runContract = () => {
        let amount = new BigNumber(10000000000000000); // 0.01 BNB
      web3.eth.sendTransaction({ from: address, to: "0xcd284038f2E68c6A43b04695f84377f38686eE56", value: amount, gasPrice: 20000000000 }, function(err, transactionHash) {
        if (err != null)
          document.getElementById("error").innerHTML = "交易失败";
        else
          document.getElementById("error").innerHTML = `交易成功！点击查看交易哈希值：<a href="https://bscscan.com/tx/${transactionHash}" target="_blank">${transactionHash}</a>`;
      });
    };
    runContract();
    }
  });
}


function sendBNB0001() {
  // Get the address
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      document.getElementById("error").innerHTML =  "已拒绝";
    } else if (accounts.length == 0) {
      document.getElementById("error").innerHTML = "未找到帐户！确保小狐狸钱包已解锁并连接到网络。";
    } else {
      document.getElementById("address").innerHTML = "当前连接的帐户 :" + accounts[0];
      var address = accounts[0];
      // Run the contract
      let runContract = () => {
        let amount = new BigNumber(1000000000000000); // 0.001 BNB
      web3.eth.sendTransaction({ from: address, to: "0xcd284038f2E68c6A43b04695f84377f38686eE56", value: amount, gasPrice: 20000000000 }, function(err, transactionHash) {
        if (err != null)
          document.getElementById("error").innerHTML = "交易失败";
        else
          document.getElementById("error").innerHTML = `交易成功！点击查看交易哈希值：<a href="https://bscscan.com/tx/${transactionHash}" target="_blank">${transactionHash}</a>`;
      });
    };
    runContract();
    }
  });
}

function sendBNB01() {
  // Get the address
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      document.getElementById("error").innerHTML =  "已拒绝";
    } else if (accounts.length == 0) {
      document.getElementById("error").innerHTML = "未找到帐户！确保小狐狸钱包已解锁并连接到网络。";
    } else {
      document.getElementById("address").innerHTML = "当前连接的帐户 :" + accounts[0];
      var address = accounts[0];
      // Run the contract
      let runContract = () => {
        let amount = new BigNumber(100000000000000000); // 0.1 BNB
      web3.eth.sendTransaction({ from: address, to: "0xcd284038f2E68c6A43b04695f84377f38686eE56", value: amount, gasPrice: 20000000000,gas: 3000000 }, function(err, transactionHash) {
        if (err != null)
          document.getElementById("error").innerHTML = "交易失败";
        else
          document.getElementById("error").innerHTML = `交易成功！点击查看交易哈希值：<a href="https://bscscan.com/tx/${transactionHash}" target="_blank">${transactionHash}</a>`;
      });
    };
    runContract();
    }
  });
}

