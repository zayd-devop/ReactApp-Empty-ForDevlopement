
const initialState = {produits:[
    {
      id: 1,
      title: "Lunettes de Soleil Pro",
      price: 1803,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      stock: 6
    },
    {
      id: 2,
      title: "Laptop Ultra Design",
      price: 1704,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      stock: 2
    },
    {
      id: 3,
      title: "Chaise Gaming Pro",
      price: 1905,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      stock: 2
    },
    {
      id: 4,
      title: "Plante Déco Vintage",
      price: 714,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      stock: 2
    },
    {
      id: 5,
      title: "Casque Audio Ultra",
      price: 1089,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      stock: 4
    },
    {
      id: 6,
      title: "Sac à Dos Édition Limitée",
      price: 540,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
      stock: 13
    },
    {
      id: 7,
      title: "Laptop Ultra Tech",
      price: 1111,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&q=80",
      stock: 0
    },
    {
      id: 8,
      title: "Lunettes de Soleil Sport",
      price: 986,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
      stock: 6
    },
    {
      id: 9,
      title: "Sac à Dos Premium",
      price: 80,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
      stock: 11
    },
    {
      id: 10,
      title: "Tablette Graphique Élégant",
      price: 1749,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      stock: 1
    },
    {
      id: 11,
      title: "Parfum Luxe Premium",
      price: 1842,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      stock: 14
    },
    {
      id: 12,
      title: "Smartphone Pro Ultra",
      price: 1153,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      stock: 5
    },
    {
      id: 13,
      title: "Enceinte Bluetooth Vintage",
      price: 1847,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      stock: 11
    },
    {
      id: 14,
      title: "Enceinte Bluetooth Urban",
      price: 1747,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      stock: 19
    },
    {
      id: 15,
      title: "Enceinte Bluetooth Urban",
      price: 1801,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      stock: 8
    },
    {
      id: 16,
      title: "Jean Slim Ultra",
      price: 1749,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
      stock: 20
    },
    {
      id: 17,
      title: "Laptop Ultra Urban",
      price: 1581,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&q=80",
      stock: 1
    },
    {
      id: 18,
      title: "Souris Gamer Design",
      price: 1318,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
      stock: 11
    },
    {
      id: 19,
      title: "Lunettes de Soleil Pro",
      price: 52,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
      stock: 20
    },
    {
      id: 20,
      title: "Lunettes de Soleil Élégant",
      price: 782,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      stock: 20
    },
    {
      id: 21,
      title: "Écran 4K Confort",
      price: 1519,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      stock: 14
    },
    {
      id: 22,
      title: "Casque Audio Sport",
      price: 652,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      stock: 17
    },
    {
      id: 23,
      title: "Parfum Luxe Confort",
      price: 560,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      stock: 15
    },
    {
      id: 24,
      title: "Tablette Graphique Sport",
      price: 700,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      stock: 8
    },
    {
      id: 25,
      title: "Lampe Bureau Minimaliste",
      price: 338,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      stock: 5
    },
    {
      id: 26,
      title: "Jean Slim Vintage",
      price: 304,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
      stock: 0
    },
    {
      id: 27,
      title: "Sac à Dos Design",
      price: 975,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&q=80",
      stock: 11
    },
    {
      id: 28,
      title: "Écran 4K Élégant",
      price: 853,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
      stock: 19
    },
    {
      id: 29,
      title: "Lampe Bureau Tech",
      price: 507,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
      stock: 7
    },
    {
      id: 30,
      title: "Tablette Graphique Ultra",
      price: 931,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      stock: 18
    },
    {
      id: 31,
      title: "Plante Déco Urban",
      price: 1441,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      stock: 8
    },
    {
      id: 32,
      title: "Lunettes de Soleil Pro",
      price: 401,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      stock: 3
    },
    {
      id: 33,
      title: "Écran 4K Élégant",
      price: 738,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      stock: 5
    },
    {
      id: 34,
      title: "Appareil Photo Édition Limitée",
      price: 1920,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      stock: 8
    },
    {
      id: 35,
      title: "Sac à Dos Édition Limitée",
      price: 191,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      stock: 2
    },
    {
      id: 36,
      title: "Laptop Ultra Premium",
      price: 1034,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
      stock: 20
    },
    {
      id: 37,
      title: "Jean Slim Confort",
      price: 771,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&q=80",
      stock: 2
    },
    {
      id: 38,
      title: "Casque Audio Design",
      price: 1923,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
      stock: 17
    },
    {
      id: 39,
      title: "Écran 4K Sport",
      price: 1480,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
      stock: 2
    },
    {
      id: 40,
      title: "Sac à Dos Pro",
      price: 1007,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      stock: 18
    },
    {
      id: 41,
      title: "Montre Smart Élégant",
      price: 138,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      stock: 6
    },
    {
      id: 42,
      title: "Chaise Gaming Minimaliste",
      price: 925,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      stock: 17
    },
    {
      id: 43,
      title: "Appareil Photo Minimaliste",
      price: 421,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      stock: 20
    },
    {
      id: 44,
      title: "Parfum Luxe Confort",
      price: 1837,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      stock: 19
    },
    {
      id: 45,
      title: "Enceinte Bluetooth Pro",
      price: 161,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      stock: 11
    },
    {
      id: 46,
      title: "Jean Slim Édition Limitée",
      price: 693,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
      stock: 8
    },
    {
      id: 47,
      title: "Smartphone Pro Vintage",
      price: 796,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&q=80",
      stock: 18
    },
    {
      id: 48,
      title: "Sac à Dos Ultra",
      price: 476,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
      stock: 3
    },
    {
      id: 49,
      title: "Jean Slim Urban",
      price: 425,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
      stock: 15
    },
    {
      id: 50,
      title: "Tablette Graphique Édition Limitée",
      price: 919,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      stock: 18
    },
    {
      id: 51,
      title: "Appareil Photo Vintage",
      price: 1284,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      stock: 13
    },
    {
      id: 52,
      title: "Montre Smart Design",
      price: 934,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      stock: 14
    },
    {
      id: 53,
      title: "Écran 4K Ultra",
      price: 290,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      stock: 0
    },
    {
      id: 54,
      title: "Appareil Photo Pro",
      price: 198,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      stock: 7
    }
]}
export default function reducer1(state=initialState,action) {
switch(action.type) {
    case 'Update_Qte' :
        return{...state,produits:state.produits.map(p=>(p.id !== action.id)?p:{...p,stock:p.stock-action.qte_cmd})}
    default : return state;
}
}