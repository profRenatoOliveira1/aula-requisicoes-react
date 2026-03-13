// Classe para criar métodos que vão se comunicar com a API
class EnderecoRequests {

    // atributos
    private serverUrl: string;
    private endpointCEP: string;

    constructor() {
        this.serverUrl = 'https://brasilapi.com.br';
        this.endpointCEP = '/api/cep/v2/';
    }

    async consultaCEP(cep: string) {
        try {
            const respostaAPI = 
            await fetch(`${this.serverUrl}${this.endpointCEP}${cep}`);

            const data = await respostaAPI.json();

            return data;
        } catch (error) {
            console.error(`Erro ao fazer requisição. ${error}`);
        }
    }
}

export default new EnderecoRequests;