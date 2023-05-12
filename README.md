# Decentralized Image Storage 
**Using IPFS, Ethereum Smart Contracts, Metamask and Hardhat**

This project is a decentralized image storage system built on top of IPFS and Ethereum blockchain using Solidity, React, Node, Hardhat, and Metamask. The aim of this project is to provide a secure and efficient way to store and retrieve images in a decentralized environment.

The project uses IPFS to store the images in a decentralized manner, ensuring that the images are available even if the centralized server goes down. Ethereum smart contracts are used to manage the ownership and access control of the images, ensuring that only authorized users can access and modify the stored images.

The front-end of the project is built using React, which provides a user-friendly interface for users to upload, view and manage their images. The back-end is built using Node, which interacts with the Ethereum blockchain and IPFS network to store and retrieve the images.

The project also leverages on Pinata cloud, a decentralized file hosting service, to provide additional storage and redundancy to the images. This ensures that the images are always available and can be retrieved quickly.

In addition, the project includes Hardhat, a development environment to deploy and test the smart contracts on a local network. This allows for more efficient and cost-effective testing of the smart contracts before deploying them to the main Ethereum network.

The project also includes Metamask, a browser extension that allows users to interact with the Ethereum network. Metamask provides a secure way for users to manage their Ethereum accounts, sign transactions, and interact with the smart contracts.

# Installing 

`> npm install`

`> npm install --save-dev hardhat@2.12.4`

`> npm install --save-dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-toolbox@^2.0.0" `

`> cd client && npm install`

# Running

Terminal 1 : `> npx hardhat node`

Teminal 2 : `> npx hardhat run --network localhost scripts/deploy.js`

Add to deployment chain address to `client/src/App.js` file

Termial 3 : `> cd client && npm start`

# Sample 

![image](https://github.com/dakshveer-singh04/decentralised-image-storage/assets/62084382/6e383fdc-eaff-4c82-8750-8cea21351939)

![image](https://github.com/dakshveer-singh04/decentralised-image-storage/assets/62084382/152c0e9b-e1aa-4249-9db1-a3ac57b76f1c)


