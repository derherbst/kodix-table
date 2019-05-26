export default class CarsService {
    // _data =
    //     'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';

    _data = [
        {
            "id": 1,
            "title": "1.6 MT Ambiente 85 л.с. МКПП",
            "description": "+ доп. опция Радио-навигационная система Amundasen 2DIN, CD, MP3",
            "year": 2012,
            "color": "red",
            "status": "pending",
            "price": 1689000
        },
        {
            "id":2,
            "title": "1.6 MT Ambiente 85 л.с. МКПП",
            "description": "",
            "year": 2015,
            "color": "white",
            "status": "pending",
            "price": 2519000
        },
        {
            "id":3,
            "title": "1.8 MT Ambiente 85 л.с. МКПП",
            "description": "",
            "year": 2010,
            "color": "black",
            "status": "out_of_stock",
            "price": 714000
        },
        {
            "id":4,
            "title": "1.8 MT Ambiente 85 л.с. МКПП",
            "description": "",
            "year": 1990,
            "color": "black",
            "status": "out_of_stock",
            "price": 1714000
        },
        {
            "id":5,
            "title": "1.75 MT Ambiente 85 л.с. МКПП",
            "description": "+ доп. опция Радио-навигационная система Amundasen 2DIN, CD, MP3",
            "year": 2018,
            "color": "green",
            "status": "in_stock",
            "price": 954000
        }
    ];

    // getResource = async () => {
    //     //
    //     const res = await fetch(`${this._data}`) // ждем пока результат промиса не будет доступен // fetch возвращает промис
    //     // debugger
    //     if (!res.ok) {
    //         throw new Error(
    //             `Could not fetch ${this._data}, received ${res.status}`
    //         ) // до then не дойдет так как статус будет не 200
    //     }
    //
    //     const body = await res.json()
    //
    //     console.log(body);
    //
    //     return body
    // };
    //
    // getCars = async () => {
    //     return await this.getResource()
    // }

    getCars() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(this._data);
            }, 700);
        });
    }
}
