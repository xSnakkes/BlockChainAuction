import { expect } from "chai"
import { ethers } from "hardhat"
import { Signer, ContractFactory, Contract } from 'ethers'; // импортируем Signer, ContractFactory и Contract для типизации

describe("AuctionEngine", function () {
    let owner: Signer;
    let seller: Signer;
    let buyer: Signer;
    let auct: Contract; // заменяем any на тип Contract

    beforeEach(async function () {
        [owner, seller, buyer] = await ethers.getSigners();

        const AuctionEngine: ContractFactory = await ethers.getContractFactory("AuctionEngine", owner);
        auct = await AuctionEngine.deploy();
    })

    it("Sets owner", async function () {
        const currentOwner: string = await auct.owner(); // явно указываем тип возвращаемого значения метода owner
        expect(currentOwner).to.equal(await owner.getAddress());
    })

    async function getTimestamp(bn: number): Promise<number> {
        const block = await ethers.provider.getBlock(bn);
        const timestamp = block.timestamp;
        return timestamp;
    }

    describe("createAuction", function(){
        it("Creates auction correctly", async function(){
            const duration = 60
            const tx = await auct.createAuction(
                ethers.utils.parseEther("0.0001"), 
                3, 
                "fake item",
                duration
            )
            const cAuction = await auct.auctions(0)
            expect(cAuction.item).to.equal("fake item")
            const ts = await getTimestamp(tx.blockNumber)
            expect(cAuction.endsAt).to.equal(ts + duration)
        })
    })

    function delay(ms: number): Promise<number>{
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    describe("buy", function(){
        it("allows to buy", async function(){
            await auct.connect(seller).createAuction(
                ethers.utils.parseEther("0.0001"), 
                3, 
                "fake item",
                60
            )

            this.timeout(5000)
            await delay(1000)

            const buyTx = await auct.connect(buyer)
                .buy(0, {value: ethers.utils.parseEther("0.0001")});
            const cAuction = await auct.auctions(0)
            const finalPrice = cAuction.finalPrice
            await expect(()=> buyTx).to.changeEtherBalance(seller, Math.ceil(finalPrice - (finalPrice * 10)/100))

            await expect(buyTx).to.emit(auct, "AuctionEnded").
                withArgs(0, finalPrice, await buyer.getAddress());
            
            await expect(
                auct.connect(buyer).
                    buy(0, {value: ethers.utils.parseEther("0.0001")})
            ).to.be.revertedWith('Stopped!')
        })
    })
})