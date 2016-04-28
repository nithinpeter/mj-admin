export class Config {
    
    static baseUrl() {
        if(Config.isTesting()) {
            return 'http://localhost:3100/api/';
        } else {
            return 'http://api.mallujunkies.com/api/';
        }
    }
    
    static isTesting() {
        var hostName = window.location.hostname;
        
        if(hostName == 'localhost')
            return true;
        else 
            return false;
    }
}