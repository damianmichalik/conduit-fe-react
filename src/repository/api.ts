export default abstract class ApiRepository {
    
    protected getApiUrl(): string
    {
        if (process.env.NODE_ENV === 'production') {
            return '';
        }

        return 'http://localhost:8080';
    }

}