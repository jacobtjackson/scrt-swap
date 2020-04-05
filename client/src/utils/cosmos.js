import { CosmWasmClient} from "@cosmwasm/sdk";

async function getAccount(endpoint, address) {
    const client = new CosmWasmClient(endpoint);
    return client.getAccount(address);
}

export { getAccount }