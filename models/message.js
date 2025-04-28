class Message {
    constructor(messgae, code) {
        this.Message = Message
        if
            (code >= 200 && code <= 299) {
            this.type = "success";
        }
        else if
            (code >= 300 && code <= 399) {
            this.type = "redirection"
        }
        else if
            (code >= 400 && code <= 499) {
            this.type = "client error"
        }
        else {
            this.type = "server  error"

        }
    }
}
module.exports = Message