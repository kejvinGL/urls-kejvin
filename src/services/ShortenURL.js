import Api from "./Api"

export default {
    shorten(longUrl) {
        return Api().post('shorten', longUrl)
    }
}

