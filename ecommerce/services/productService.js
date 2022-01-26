const Products= [
    {
        id: 100,
        name: 'Handphone Samsung',
        price: 100,
        image: require('../assets/products/samsung.jpg'),
        description: 'Let’s give a big hand to Galaxy S21 FE 5G, the newest member of the epic Galaxy S21 Series.' + 
        '\nWe took what you love most and built the ultimate fan-inspired phone so you can experience your everyday passions to the absolute fullest.' + 
        '\nOur fastest chipset? Check. Pro-grade camera You got it.And the crowd goes wild.The Fan Edition is back.'
    },

    {
        id: 200,
        name: 'Laptop Thinkpad',
        price: 200,
        image: require('../assets/products/thinkpad.jpg'),
        description: 'Specification:' + 
        '\nProcessor : Intel Core i7-1185G7' + 
        '\nGraphics : Integrated Intel Iris Xe Graphics ' + 
        '\nChipset : Intel SoC Platform ' +
        '\nMemory : 16GB Soldered LPDDR4x-4266 ' +
        '\nMemory Slots : Memory soldered to systemboard' +
        '\nMax Memory : 16GB soldered memory' +
        '\nStorage : 1TB SSD M.2 2280 PCIe x4 NVMe Opal2 ' +
        '\nStorage Support : One drive, up to 2TB M.2 2280 SSD '        
    }, 

    {
        id: 300,
        name: 'HP VIVO',
        price: 300,
        image: require('../assets/products/vivo.jpg'),
        description: 'KETERANGAN:' +
        '\nBarang akan kita open box sebelum kirim untuk ambil Kartu garansi, Jadi jangan KOMPLAIN. Kenapa ga segel?' + 
        '\nFungsinya kami wajib setor Kartu Garansi untuk pihak VIVO supaya bila terjadi sesuatu dengan HP maka bisa langsung klaim di semua SERVICE CENTER VIVO DISELURUH INDONESIA.'
        
    }

]

export function getProducts() {
    return Products
}

export function getProduct(id) {
    return Products.find((product) => (product.id == id))
}