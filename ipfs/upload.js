async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = await create();

    const metadata1 = {
        path: '/',
        content: JSON.stringify({
            name: "Balance",
            attributes: [
            {
                "trait_type": "Fortune",
                "value": "33"
            },
            {
                "trait_type": "Treasure",
                "value": "33"
            },
            {
                "trait_type": "Wealth",
                "value": "33"
            }
            ],
            image: "https://ipfs.io/ipfs/QmfU82Q1DMH3oXWUu6HMLjd14QDm2L6vj8AL4cCbGDpo1v?filename=1.png",
            description: "Jack of all trades, master of none, though often better than a master of one."
        })
    };
    const metadata2 = {
        path: '/',
        content: JSON.stringify({
            name: "My Precious",
            attributes: [
            {
                "trait_type": "Fortune",
                "value": "0"
            },
            {
                "trait_type": "Treasure",
                "value": "100"
            },
            {
                "trait_type": "Wealth",
                "value": "0"
            }
            ],
            image: "https://ipfs.io/ipfs/QmY6jJLD1zcmdCwkCBnJDvRmchcRHbkVJ9aGGsNXU8CAvb?filename=2.png",
            description: "How to get rich in 3 easy steps.\nStep 1: Don't blindly trust the description within NFTs claiming they'll make you rich.\nStep 2: ???\nStep 3: Profit!"
        })
    };
    const metadata3 = {
        path: '/',
        content: JSON.stringify({
            name: "Luck isn't finite",
            attributes: [
            {
                "trait_type": "Fortune",
                "value": "100"
            },
            {
                "trait_type": "Treasure",
                "value": "0"
            },
            {
                "trait_type": "Wealth",
                "value": "0"
            }
            ],
            image: "https://ipfs.io/ipfs/QmaJ6Rb8D8uvRHehJdD7aqnDs1bnBzqx4tk4fpLWoUsd4E?filename=3.png",
            description: "Unfortunately for you, this is a 1 of 1 and I ain't selling."
        })
    };
    const metadata4 = {
        path: '/',
        content: JSON.stringify({
            name: "Make it rain",
            attributes: [
            {
                "trait_type": "Fortune",
                "value": "0"
            },
            {
                "trait_type": "Treasure",
                "value": "0"
            },
            {
                "trait_type": "Wealth",
                "value": "100"
            }
            ],
            image: "https://ipfs.io/ipfs/Qmd1b4DyMab75ufwRbZnKCXyuQkjopsYSt28WRPLiGTtfQ?filename=4.png",
            description: "If money doesn't grow on trees, what's the paper it's printed on made of?"
        })
    };

    const result1 = await ipfs.add(metadata1);
    console.log(result1);
    const result2 = await ipfs.add(metadata2);
    console.log(result2);
    const result3 = await ipfs.add(metadata3);
    console.log(result3);
    const result4 = await ipfs.add(metadata4);
    console.log(result4);

    process.exit(0);
}

run();