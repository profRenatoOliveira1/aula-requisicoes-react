class EnderecoRequests {

    private serverUrl: string;
    private endpointCEP: string;

    constructor() {
        this.serverUrl = 'https://brasilapi.com.br'
        this.endpointCEP = '/api/cep/v2/';
    }

    async consultaCEP(cep: string) {
        try {
            const response = await fetch(`${this.serverUrl}${this.endpointCEP}${cep}`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default new EnderecoRequests;