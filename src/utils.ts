import { productTemplate } from '@/types/productData.interface';
import productListJson from "@/assets/data.json";
import cardNetwork from "@/assets/cardNetwork.json";
import "vue";

class ProductList {
    private productArray: Array<productTemplate> = [];
    private jsonData = "";

    initialise() {
        const data = localStorage.getItem('productList');
        if (data === null) {
            this.jsonData = JSON.stringify(productListJson.products);
            localStorage.setItem('productList', this.jsonData);
            this.productArray = productListJson.products;
        } else {
            this.jsonData = data;
            this.productArray = JSON.parse(this.jsonData);
        }
    }

    getList() {
        return this.productArray;
    }

    getLength() {
        return this.productArray.length;
    }
    getProduct(idx = 1) {
        if (idx === null) {
            return this.productArray[0];
        } else {
            idx = idx - 1;
            return this.productArray[idx];
        }
    }

    editItem(idx: number, product: productTemplate) {
        idx = idx - 1;
        this.productArray[idx] = product;
        this.jsonData = JSON.stringify(this.productArray);
        localStorage.setItem('productList', this.jsonData);
    }

    addItem(product: productTemplate) {
        const id = this.productArray.length + 1;
        product.id = "PRO" + id.toString().padStart(5, "0");
        this.productArray.push(product);
        this.jsonData = JSON.stringify(this.productArray);
        localStorage.setItem('productList', this.jsonData);
    }

    getEntity(idx: number, entity: string) {
        idx = idx - 1;
        return (entity === "name" ? this.productArray[idx].name
            : (entity === "description" ? this.productArray[idx].description : this.productArray[idx].id));

    }

}
const productList = new ProductList();

function getLogos(): object {
    return cardNetwork.cardNetworkLogos;
}
function getURL(card: string): string {
    const cardURL: {
        [key: string]: string;
    } = cardNetwork.cardNetworkConfigs;
    return cardURL[card];
}
function getVersion(version: string): string {
    return `3DSecure ${version === "threeDSecure_1_0" ? "1" : "2"}.0`;
}

function getId(productId: string): number {
    const id = productId.substring(3);
    return parseInt(id);
}

export { productList, getLogos, getURL, getVersion, getId };