export const apiConfig = {
    gwallet: {
        endpoints: {
            api: {
                getWallets: "http.gchainUrl|get-wallets",
                addWallet: "http.gchainUrl|add-wallet",
                addressTransact: "http.gchainUrl|address-transact"
            }
        },
        http: {
            gchainUrl: "http://localhost:3000/"
        }
    }
};
