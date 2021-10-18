export interface GWallet {
    balance?: number;
    publicKey?: string;
}

export interface GTransaction {
    id?: string;
    input?: any;
    outputs?: any[];
}