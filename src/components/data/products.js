import amber from '../../assets/amber.png';
import ocean from '../../assets/ocean.png';
import forest from '../../assets/forest.png';
import mid from '../../assets/mid.png';
import ct from '../../assets/ct.png';
import lt from '../../assets/lt.png';
import vd from '../../assets/vd.png';
import mc from '../../assets/mc.png';
import mt from '../../assets/mt.png';
import cool from '../../assets/cool.png';
import wc from '../../assets/wc.png';
import dr from '../../assets/dr.png';

const products = [
  {
    id: "101",
    name: "Amber Aura Eau de Parfum",
    category: "Eau de Parfum",
    price: 120.00,
    description: "Meleg, borostyános illat, eleganciát sugározva.",
    image: amber, 
    isNew: true,
    isSale: false
  },
  {
    id: "102",
    name: "Ocean Breeze Eau de Toilette",
    category: "Eau de Toilette",
    price: 75.50,
    description: "Friss, tengeri szellő illat, a szabadság érzését nyújtja.",
    image:  ocean, 
    isNew: false,
    isSale: true
  },
  {
    id: "103",
    name: "Forest Whisper Eau Fraiche",
    category: "Eau Fraiche",
    price: 55.00,
    description: "Könnyed, erdei illat, a természet közelségét idézi.",
    image:  forest,
    isNew: false,
    isSale: false
  },
  {
    id: "104",
    name: "Midnight Bloom Eau de Parfum",
    category: "Eau de Parfum",
    price: 150.00,
    description: "Gazdag, éjszakai virág illat, rejtélyes és vonzó.",
    image:  mid,
    isNew: true,
    isSale: true
  },
  {
    id: "105",
    name: "Citrus Zest Eau de Toilette",
    category: "Eau de Toilette",
    price: 60.25,
    description: "Élénk, citrusos illat, frissítő és energizáló.",
    image:  ct,
    isNew: false,
    isSale: false
  },
  {
    id: "106",
    name: "Velvet Rose Eau de Parfum",
    category: "Eau de Parfum",
    price: 130.00,
    description: "Bársonyos rózsa illat, klasszikus és időtlen elegancia.",
    image:  lt,
    isNew: false,
    isSale: false
  },
  {
    id: "107",
    name: "Spiced Wood Eau de Toilette",
    category: "Eau de Toilette",
    price: 85.00,
    description: "Fűszeres, fás illat, meleg és karakteres.",
    image:  vd,
    isNew: true,
    isSale: false
  },
  {
    id: "108",
    name: "Mystic Garden Eau Fraiche",
    category: "Eau Fraiche",
    price: 48.75,
    description: "Titokzatos kert illata, könnyed és elvarázsoló.",
    image:  mc,
    isNew: false,
    isSale: true
  },
  {
    id: "109",
    name: "Golden Sands Eau de Parfum",
    category: "Eau de Parfum",
    price: 110.00,
    description: "Homokos tengerpart illata, napos és luxus érzet.",
    image:  mt,
    isNew: false,
    isSale: false
  },
  {
    id: "110",
    name: "Cool Mint Eau de Toilette",
    category: "Eau de Toilette",
    price: 68.00,
    description: "Hűsítő menta illat, élénkítő és tiszta.",
    image:  cool,
    isNew: true,
    isSale: false
  },
  {
    id: "111",
    name: "Spring Dew Eau Fraiche",
    category: "Eau Fraiche",
    price: 52.00,
    description: "Tavaszi harmat illata, friss és megújító.",
    image:  wc,
    isNew: false,
    isSale: false
  },
  {
    id: "112",
    name: "Dark Vanilla Eau de Parfum",
    category: "Eau de Parfum",
    price: 140.00,
    description: "Mély, sötét vanília illat, érzéki és titokzatos.",
    image:  dr,
    isNew: false,
    isSale: true
  }
];

export default products;