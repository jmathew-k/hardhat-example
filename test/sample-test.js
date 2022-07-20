const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
    it("Should return the new greeting once it's changed", async function () {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, World!");
        await greeter.deployed();

        expect(await greeter.greet()).to.equal("Hello, World!");

        const setGreetingTx = await greeter.setGreeting("Hola, Mundo!");

        // wait until the transaction is mined
        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal("Hola, Mundo!");
    });
});