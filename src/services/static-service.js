import {img1, img2, img3, img4, img5} from './img';

export default class StaticService {
    getMenuItems = async () => {
        const menu = [
            {
                "title": "Hurchanessa",
                "price": 12,
                "url": img1,
                "id": 1
            },
            {
                "title": "Gayorgia",
                "price": 10,
                "url": img2,
                "id": 2
            },
            {
                "title": "Cumgnoma",
                "price": 13,
                "url": img3,
                "id": 3
            },
            {
                "title": "Memozi",
                "price": 8,
                "url": img4,
                "id": 4
            },
            {
                "title": "Brushavska",
                "price": 25,
                "url": img5,
                "id": 5
            }
        ]
        return menu;
    }
}

