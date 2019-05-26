export default class CarsService {
    _data =
        'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json'

    getResource = async () => {
        //
        const res = await fetch(`${this._data}`) // ждем пока результат промиса не будет доступен // fetch возвращает промис
        // debugger
        if (!res.ok) {
            throw new Error(
                `Could not fetch ${this._data}, received ${res.status}`
            ) // до then не дойдет так как статус будет не 200
        }

        const body = await res.json()

        console.log(body);

        return body
    };

    getCars = async () => {
        return await this.getResource()
    }
}
