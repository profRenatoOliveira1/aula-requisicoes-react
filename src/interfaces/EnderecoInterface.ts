export default interface EnderecoDTO {
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
    location: {
        type: string
        coordinates: {
            longitude: string
            latitude: string
        }
    }
}