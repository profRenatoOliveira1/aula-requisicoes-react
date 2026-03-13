export default interface EnderecoDTO {
    cep: string
    state: string
    city: string
    neighborhood: string | null
    street: string | null
    location: {
        type: string
        coordinates: {
            longitude: string | null
            latitude: string | null
        }
    }
}