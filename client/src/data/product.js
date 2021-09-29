const storeProducts = [
  {
    id: 1,
    title: "Cat Tee Black T-Shirt",
    image:
      "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["S", "XS"],
    price: 10.9,
  },
  {
    id: 2,
    title: "Dark Thug Blue-Navy T-Shirt",
    image:
      "https://images.pexels.com/photos/7562315/pexels-photo-7562315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["M"],
    price: 29.45,
  },
  {
    id: 3,
    title: "Sphynx Tie Dye Wine T-Shirt",
    image:
      "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["X", "L", "XL"],
    price: 9.0,
  },
  {
    id: 4,
    title: "Short Sleeve T-Shirt",
    image:
      "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["XS", "X", "L", "ML", "XL"],
    price: 75.0,
  },
  {
    id: 5,
    title: "Sphynx Tie Dye Grey T-Shirt",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["X", "L", "XL", "XXL"],
    price: 10.9,
  },
  {
    id: 6,
    title: "Sphynx Tie Dye Grey T-Shirt",
    image:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["X", "L", "XL", "XXL"],
    price: 10.9,
  },
  {
    id: 7,
    title: "Danger Knife Grey",
    image:
      "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["X", "L"],
    price: 14.9,
  },
  {
    id: 8,
    title: "Sphynx Tie Dye Grey T-Shirt",
    image:
      "https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["X", "L"],
    price: 14.9,
  },
  {
    id: 9,
    title: "Short Sleeve T-Shirt",
    image:
      "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["XL"],
    price: 25.9,
  },
  {
    id: 10,
    title: "Tso 3D Short Sleeve T-Shirt A",
    image:
      "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["X", "L", "XL"],
    price: 10.9,
  },
  {
    id: 11,
    title: "Short Sleeve T-Shirt",
    image:
      "https://images.pexels.com/photos/7873111/pexels-photo-7873111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["XL", "XXL"],
    price: 49.9,
  },
  {
    id: 12,
    title: "Crazy Monkey Black T-Shirt",
    image:
      "https://images.pexels.com/photos/670786/pexels-photo-670786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["S"],
    price: 22.5,
  },
  {
    id: 13,
    title: "Short Sleeve T-Shirt",
    image:
      "https://images.pexels.com/photos/6315112/pexels-photo-6315112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["XL"],
    price: 18.7,
  },
  {
    id: 14,
    title: "Crazy Monkey Grey",
    image:
      "https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["L", "XL"],
    price: 134.9,
  },
  {
    id: 15,
    title: "On The Streets Black T-Shirt",
    image:
      "https://images.pexels.com/photos/7706424/pexels-photo-7706424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    availableSizes: ["L", "XL"],
    price: 49.0,
  },
  {
    id: 16,
    title: "Blue/Tan Jacket Signature Check Slim Fit Suit",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G27/shotzoom/2232/691-308s.jpg",
    availableSizes: ["L", "XL"],
    price: "802",
  },
  {
    id: 17,
    title: "Bright Blue Jacket Flannel Slim Fit Suit",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G27/shotzoom/2215/347-119s.jpg",
    availableSizes: ["L", "XL"],
    price: "567",
  },
  {
    id: 18,
    title: "Signature Suit: Jacket",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G27/shotzoom/2224/335-823s.jpg",
    availableSizes: ["L", "XL"],
    price: "745",
  },
  {
    id: 19,
    title: "Slim Fit Signature Check Suit: Jacket",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G27/shotzoom/2225/446-527s.jpg",
    availableSizes: ["L", "XL"],
    price: "802",
  },
  {
    id: 20,
    title: "Slim Fit Signature Motionflex Puppytooth Suit: Jacket",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G96/shotzoom/2055/376-135s.jpg",
    availableSizes: ["L", "XL"],
    price: "796",
  },
  {
    id: 21,
    title: "Signature Suit: Jacket",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G27/shotzoom/2224/328-156s.jpg",
    availableSizes: ["L", "XL"],
    price: "745",
  },
  {
    id: 22,
    title: "Slim Fit Signature Stripe Suit: Jacket",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G27/shotzoom/2226/288-567ss.jpg",
    availableSizes: ["L", "XL"],
    price: "702",
  },
  {
    id: 23,
    title: "Slim Fit Signature Motionflex Check Suit: Jacket",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G96/shotzoom/2057/241-258s.jpg",
    availableSizes: ["L", "XL"],
    price: "805",
  },
  {
    id: 24,
    title: "Tailored Fit Signature Puppytooth Suit: Jacket",
    image:
      "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G96/shotzoom/2053/206-612s.jpg",
    availableSizes: ["L", "XL"],
    price: "905",
  },
];

export default storeProducts;
