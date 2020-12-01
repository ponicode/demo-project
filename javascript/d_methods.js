
const http = require("http")
const axios = require("axios")

export class Requestor {
    headers
    constructor(
        auth_token,
        version,
        ) {
        this.headers = {authorization : `Bearer: ${auth_token}`, 'X-Version':version}
    }
    async get_post_response(url, data ){
        try {
            const options = {
                headers: this.headers,
            };
            const response = await axios.post(url, data,options)
            if (response.status != 200) {
                this.Reporter.log(`Request not valid for url ${url}` )
            }
            return response
        }
        catch (e) {
            let error_data = {
                type: "ErrorReport",
                message: "Request failure",
                error: e.string,
                data: {
                    url: url,
                    data: data
                }
            }
            this.Reporter.request_report.push(error_data)
            if (!e.isAxiosError) {
                this.Reporter.log("PROBLEM")
                }
                const err = e
                if (err) {
                    this.Reporter.log(err.code)
                    this.Reporter.log(err.response && err.response.status)
                    this.Reporter.log(err.response && err.response.data)
                }
            throw('Error with request')
        }

    }
}